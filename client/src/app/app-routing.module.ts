import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddQuoteComponent } from './add-quote/add-quote.component'
import { HomeComponent } from './home/home.component'
import { EditAuthorComponent } from './edit-author/edit-author.component'
import { NewAuthorComponent } from './new-author/new-author.component'
import { QuotesComponent } from './quotes/quotes.component'


const routes: Routes = [
    { path: 'addQuote', component: AddQuoteComponent },
    { path: 'home', component: HomeComponent },
    { path: 'editAuthor/:id', component: EditAuthorComponent },
    { path: 'newAuthor', component: NewAuthorComponent },
    { path: 'quotes/:id', component: QuotesComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
