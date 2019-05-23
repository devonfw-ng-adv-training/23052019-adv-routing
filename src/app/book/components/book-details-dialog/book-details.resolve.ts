import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Book } from '../../model/book';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BookService } from '../../services/book.service';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsResolve implements Resolve<Book> {
  constructor(private readonly books: BookService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Book> | Promise<Book> | Book {
    return this.books.getOne(+route.params.id);
  }
}
