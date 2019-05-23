import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookOverviewDialogComponent } from './components/book-overview-dialog/book-overview-dialog.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BookResultsComponent } from './components/book-results/book-results.component';

@NgModule({
  declarations: [BookOverviewDialogComponent, BookSearchComponent, BookResultsComponent],
  imports: [
    SharedModule
  ]
})
export class BookModule {
}
