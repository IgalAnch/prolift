import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { ApolloQueryResult } from "@apollo/client/core";
import { NavigationService } from "../navigation.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private navService: NavigationService
  ) {}
  //vars
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | boolean | UrlTree {
    //const url: string = state.url;
    this.navService.s = state.url;
    //alert("navService.s= " + this.navService.s);
    console.log(state.url);
    return this.checkLogin;
  } //
  checkLogin = new Observable<boolean | UrlTree>((subscriber) => {
    this.authService.verify().subscribe(
      (res) => {
        subscriber.next(true);
        subscriber.complete();
      },
      (error) => {
        //if error == unauthorized
        if (this.navService.s == "/tech-verified") {
          subscriber.next(this.router.parseUrl("/tech-landing"));
        } else {
          subscriber.next(this.router.parseUrl("/login"));
        }
        subscriber.complete();
      }
    );
  });
}
