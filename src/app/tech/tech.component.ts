import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tech",
  templateUrl: "./tech.component.html",
  styleUrls: ["./tech.component.scss"],
})
export class TechComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  c;

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
}
