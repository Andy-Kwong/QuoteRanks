import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})

export class EditAuthorComponent implements OnInit {

    authorId: any;
    oneAuthor: any;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _httpService: HttpService
    ) {}

    ngOnInit() {
        this._route.params.subscribe((params: Params) => this.authorId = params['id']);
        console.log("Got the ID! ", this.authorId)
        this.getOneAuthor()
        this.oneAuthor = {name:""}
  }

    getOneAuthor() {
        console.log("Getting one author")
        let observable = this._httpService.getOneAuthor(this.authorId);
        observable.subscribe(data => {
            this.oneAuthor = data;
            console.log(this.oneAuthor);
            console.log(data)
        })
    }

    updateAuthor() {
        let observable = this._httpService.editAuthor(this.oneAuthor);
        observable.subscribe(data => {
            console.log(data);
        })
    }

}
