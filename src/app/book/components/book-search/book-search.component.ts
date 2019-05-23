import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookSearchCriteria } from '../../model/book-search-criteria';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent {
  @Input()
  criteria: BookSearchCriteria;

  @Output()
  search: EventEmitter<BookSearchCriteria> = new EventEmitter();

  constructor() { }

  handleSearch($event: Event) {
    $event.preventDefault();
    const form = $event.target as HTMLElement;
    const titleElement = form.querySelector<HTMLInputElement>('#title');
    const authorElement = form.querySelector<HTMLInputElement>('#author');

    this.search.emit({
      title: titleElement.value,
      author: authorElement.value
    });
  }
}
