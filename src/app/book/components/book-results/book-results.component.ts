import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.scss']
})
export class BookResultsComponent {
  @Input()
  results: Book[];

  constructor() { }
}
