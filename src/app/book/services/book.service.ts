import { BookSearchCriteria } from '../model/book-search-criteria';
import { Observable, of, timer } from 'rxjs';
import { Book } from '../model/book';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';


const books: Book[] = [
  {
    id: 0,
    title: 'Java for Dummies',
    author: 'John Example'
  },
  {
    id: 1,
    title: 'JavaScript for Dummies',
    author: 'James Bond'
  },
  {
    id: 2,
    title: 'You Don\'t know JS',
    author: 'Kyle Simpson'
  }
];

@Injectable({
  providedIn: 'root'
})
export class BookService {
  search(criteria: BookSearchCriteria): Observable<Book[]> {
    const results = books.filter(book => {
      const authorMatches = criteria.author != null ? book.author.indexOf(criteria.author) !== -1 : true;
      const titleMatches = criteria.title != null ? book.title.indexOf(criteria.title) !== -1 : true;

      return titleMatches && authorMatches;
    });

    return of(results).pipe(delay(1000));
  }

  getOne(id: number): Observable<Book | undefined> {
    const foundBook = books.find(book => book.id === id);
    return of(foundBook).pipe(delay(3000));
  }
}
