import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//Apollo gql
import { Apollo, gql } from "apollo-angular";
import { map, filter } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";
import { NavigationService } from "../navigation.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public apollo: Apollo,
    public authService: AuthService,
    public router: Router,
    public navService: NavigationService
  ) {}

  login_credentials = gql`
    query($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        id
        username
        password
        email
        firstName
        lastName
      }
    }
  `;

  function_one() {
    let A = "value of var A";
    let B = "value of var B";
  }

  ngOnInit(): void {}

  onSubmitLogin(c) {
    this.login(c);
  }

  onSubmit(c) {
    this.login(c);
  }

  async login(c) {
    console.log(c.form.value);
    let user = {
      username: c.form.value.username,
      password: c.form.value.password,
    };

    let ap = await this.apollo
      .watchQuery({
        query: this.login_credentials,
        variables: user,
        fetchPolicy: "network-only", //for test purposes
      })
      .valueChanges.pipe(map((result: any) => result.data))
      .subscribe((result) => {
        console.log(result.login.firstName);
        console.log(result);
        localStorage.setItem("token", result.login.firstName);
        this.authService.isLoggedIn = true; //authservice loggedin = true
        console.log(this.navService.s);
        c.form.reset();
        console.log(c.form.value);
        this.router.navigateByUrl(this.navService.s);
      });
  }
  //
}
