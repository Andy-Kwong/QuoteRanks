import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
    newAuthor: any;

    constructor(private _httpService: HttpService) { 
        this.newAuthor = {name: ''}
    }

    ngOnInit() {
    }

    submitAuthor() {
        let observable = this._httpService.addAuthor(this.newAuthor);
        observable.subscribe(data => {
            console.log(data);
        })

        this.newAuthor = {name: ''};
    }

}
