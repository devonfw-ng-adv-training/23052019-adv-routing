import { Component, OnDestroy } from '@angular/core';
import { BookSearchCriteria } from '../../model/book-search-criteria';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../model/book';
import { Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-overview-dialog',
  templateUrl: './book-overview-dialog.component.html',
  styleUrls: ['./book-overview-dialog.component.scss']
})
export class BookOverviewDialogComponent implements OnDestroy {
  currentSearchCriteria: BookSearchCriteria = {
    author: '',
    title: ''
  };

  searchResults: Book[] = [];

  private unsubscribe = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly books: BookService) {

    this.route.params
      .pipe(
        takeUntil(this.unsubscribe),
        map(params => params as BookSearchCriteria),
        tap(searchCriteria => this.currentSearchCriteria = searchCriteria),
        switchMap(searchCriteria => this.books.search(searchCriteria))
      )
      .subscribe(results => this.searchResults = results);
  }

  doSearch(searchCriteria: BookSearchCriteria) {
    this.router.navigate([searchCriteria], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
