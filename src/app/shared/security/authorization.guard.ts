import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizedRoute, SecurityService } from './security.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  private readonly accessDeniedUrlTree;

  constructor(private readonly security: SecurityService, router: Router) {
    this.accessDeniedUrlTree = router.parseUrl('/client/access-denied');
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const routeConfig = route.routeConfig as AuthorizedRoute;
    if (routeConfig.permitAll) {
      return true;
    }
    if (routeConfig.accessAllowedTo) {
      return this.security.getCurrentUserRights()
        .pipe(
          map(userRights => userRights.indexOf(routeConfig.accessAllowedTo) !== -1),
          map(isAuthorized => isAuthorized ? true : this.accessDeniedUrlTree)
        );
    }

    return this.accessDeniedUrlTree;
  }

}
