import { Injectable } from "@angular/core";

import { Observable, of, observable } from "rxjs";
import { tap, delay, switchMap } from "rxjs/operators";
import { Apollo, gql } from "apollo-angular";
import { map, filter } from "rxjs/operators";
import { nextTick } from "process";
import { resolve } from "dns";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(public apollo: Apollo, public router: Router) {}
  isLoggedIn = false;

  dog = "dlog";

  verify() {
    let verifyToken_query = gql`
      query OK {
        verifyToken
      }
    `;
    let ap = this.apollo.watchQuery({
      query: verifyToken_query,
      fetchPolicy: "network-only", //for test purposes
    }).valueChanges;
    return ap;
  }

  idk(tt1): true | UrlTree {
    if (this.dog == "dog") {
      console.log("dog2");
      return true;
    }
    if (this.dog == "dlog") {
      console.log("dlog2");
      return this.router.parseUrl("/login");
    }
    if (this.dog == "dooooooog") {
      console.log("doooooooog2");
      return this.router.parseUrl("/login");
    }
  }
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap((val) => (this.isLoggedIn = true))
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  //Add guard to admin frontend similar to this
  //
}
//.pipe(switchMap((res) => res));
//console.log(ap);
// let t1 = ap.subscribe(
//   (result) => {
//     console.log("==========veryify=====");
//     console.log(result);
//     console.log("=========");
//     //localStorage.setItem("token", result.login.firstName);
//     this.isLoggedIn = true; //authservice loggedin = true
//     this.dog = "dog";
//   },
//   (error) => {
//     console.log("=======verify error====");
//     console.log(error);
//     console.log("=========");
//     this.dog = "dooooooog";
//     //this.router.navigate(["login"]);
//   }
// );
