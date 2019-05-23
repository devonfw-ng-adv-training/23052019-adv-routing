import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { ResolveEnd, ResolveStart, Router, RouterModule } from '@angular/router';
import { BookOverviewDialogComponent } from './book/components/book-overview-dialog/book-overview-dialog.component';
import { BookDetailsDialogComponent } from './book/components/book-details-dialog/book-details-dialog.component';
import { BookDetailsResolve } from './book/components/book-details-dialog/book-details.resolve';
import { AuthorizationGuard } from './shared/security/authorization.guard';
import { AuthorizedRoutes, Right } from './shared/security/security.service';
import { AccessDeniedDialogComponent } from './shared/security/components/access-denied-dialog/access-denied-dialog.component';


const routes: AuthorizedRoutes = [
  {
    path: 'client',
    children: [
      {
        path: 'books',
        component: BookOverviewDialogComponent,
        accessAllowedTo: Right.User,
        canActivate: [AuthorizationGuard]
      },
      {
        path: 'book/:id',
        component: BookDetailsDialogComponent,
        canActivate: [AuthorizationGuard],
        resolve: {
          bookDetails: BookDetailsResolve
        }
      },
      {
        path: 'access-denied',
        component: AccessDeniedDialogComponent,
        canActivate: [AuthorizationGuard],
        permitAll: true
      }
    ]
  },
  {path: '', pathMatch: 'full', redirectTo: 'client/books'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BookModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    router.events.subscribe(routerEvent => {
      if (routerEvent instanceof ResolveStart) {
        console.log('reslove starts....');
      }
      if (routerEvent instanceof ResolveEnd) {
        console.log('reslove ends....');
      }
    });
  }
}
