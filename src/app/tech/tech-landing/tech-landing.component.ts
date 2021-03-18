import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";
import { Apollo, gql } from "apollo-angular";
import { HttpClient } from "@angular/common/http";
import { map, filter } from "rxjs/operators";

@Component({
  selector: "app-tech-landing",
  templateUrl: "./tech-landing.component.html",
  styleUrls: ["./tech-landing.component.scss"],
})
export class TechLandingComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router,
    public apollo: Apollo,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  categories = [
    {
      title: "תכניות חשמל",
      img: "assets/ts3_1.jpg",
      pdf: [
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
      ],
    },
    {
      title: "מדריך למשתמש",
      img: "assets/ts3_2.jpg",
      pdf: [
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
      ],
    },
    {
      title: "דפי מוצר",
      img: "assets/ts3_3.jpg",
      pdf: [
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
      ],
    },
    {
      title: "מדריכים לבקר",
      img: "assets/ts3_4.jpg",
      pdf: [
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
      ],
    },
    {
      title: "קטגוריה כלשהי",
      img: "assets/ts3_5.jpg",
      pdf: [
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
      ],
    },
    {
      title: "קטגוריה כלשהי",
      img: "assets/ts3_6.jpg",
      pdf: [
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
        { name: "מדריך חוברת משתמש", size: 710.79 },
      ],
    },
  ];

  onSubmit(n) {}

  onSubmitLogin(b) {}
  onSubmitRequest(b) {}

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
        c.form.reset();
        console.log(c.form.value);
        this.router.navigate(["tech-verified"]);
      });
  }
}
