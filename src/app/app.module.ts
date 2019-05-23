import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { RouterModule } from '@angular/router';
import { BookOverviewDialogComponent } from './book/components/book-overview-dialog/book-overview-dialog.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BookModule,
    RouterModule.forRoot([
      {
        path: 'client',
        children: [
          {
            path: 'books',
            component: BookOverviewDialogComponent
          }
        ]
      },
      {path: '', pathMatch: 'full', redirectTo: 'client/books'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
