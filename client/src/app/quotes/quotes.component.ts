import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
    
    authorId: any;
    quotesByAuthor: any;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

  ngOnInit() {
      this._route.params.subscribe((params: Params) => this.authorId = params['id']);
      this.quotesByAuthor = {text: '', votes: 0}
  }

    getQuotes() {
        let observable = this._httpService.getQuotesByAuthor(this.authorId);
        observable.subscribe(data => {
            console.log("getting quotes from db", data);
            this.quotesByAuthor = data;
        })
    }


}
