import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    authorId: any;

    constructor(private _http: HttpClient) { }

    getAuthors() {
        return this._http.get('/authors');
    }

    addAuthor(author) {
        return this._http.post('/authors', author);
    }

    editAuthor(author) {
        let url = '/authors/' + author._id;
        return this._http.put(url, author);
    }

    receiveAuthorId(authorId) {
        this.authorId = authorId;
    }

    deleteAuthor(authorId) {
        let url = '/authors/' + authorId;
        return this._http.delete(url);
    }

    getOneAuthor(authorId) {
        let url = '/authors/' + authorId;
        return this._http.get(url);
    }

    getQuotesByAuthor(authorId) {
        let url = '/authors/' + authorId + '/quotes/';
        return this._http.get(url);
    }


}
