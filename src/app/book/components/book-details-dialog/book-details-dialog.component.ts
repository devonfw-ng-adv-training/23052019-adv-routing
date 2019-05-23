import { Component, OnDestroy } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../model/book';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnDestroy {
  book: Book;

  private unsubscribe = new Subject();

  constructor(private readonly books: BookService, private readonly route: ActivatedRoute) {
    this.route.data
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(data => this.book = data.bookDetails);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
