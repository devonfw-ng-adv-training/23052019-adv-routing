import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';

export enum Right {
  Admin, User
}

export interface AuthorizedRoute extends Route {
  accessAllowedTo?: Right;
  permitAll?: boolean;
  children?: AuthorizedRoutes;
}

export type AuthorizedRoutes = AuthorizedRoute[];

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  getCurrentUserRights(): Observable<Right[]> {
    return of([Right.User]);
  }
}
