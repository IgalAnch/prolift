import { keyframes } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { of, Observable, asyncScheduler } from "rxjs";
import { observeOn } from "rxjs/operators";

@Component({
  selector: "app-op",
  templateUrl: "./op.component.html",
  styleUrls: ["./op.component.scss"],
})
export class OpComponent implements OnInit {
  constructor() {}

  bigFunc() {
    // we will add this content, replace for anything you want to add
    var wrapper, content, test;
    var more = '<div style="height:1000px; background:#EEE;"></div>';

    // this is the scroll event handler
    function scroller() {
      // print relevant scroll info
      test.innerHTML =
        wrapper.scrollTop +
        " + " +
        wrapper.offsetHeight +
        " + 100 > " +
        content.offsetHeight;

      // add more contents if user scrolled down enough
      if (
        wrapper.scrollTop + wrapper.offsetHeight + 100 >
        content.offsetHeight
      ) {
        content.innerHTML += more;
        // NK: Here you can make an Ajax call and fetch content to append to content.innerHTML
      }
    }

    function ap(key) {
      var a = "";
      switch (key) {
        case "1":
          a = "fe f";
          break;
        case "2":
          a = "pa f";
          break;
        case "3":
          a = "sa m";
          break;
        case "4":
          a = "le f";
          break;
        case "5":
          a = "in f";
          break;
        case "6":
          a = "ha m";
          break;
        case "7":
          a = "he m";
          break;
        case "8":
          a = "eni";
          break;
        case "!":
          a = "un r";
          break;
        case "@":
          a = "co";
          break;
        case "#":
          a = "tra";
          break;
        case "$":
          a = "reg";
          break;
        default:
          a = "";
      }
      return a;
    }

    function keyp(e) {
      var skl = ap(e.key);
      console.log(e.key + " = " + skl);
    }
    window.addEventListener("keypress", keyp, true); //iiiiiiiiiiiiiiiii

    wrapper = document.getElementById("wrapper");
    content = document.getElementById("content");
    test = document.getElementById("test");

    content.innerHTML = '<div style="height:5000px; background:#EEE;"></div>';
    //jelour
    // hook the scroll handler to scroll event
    if (wrapper.addEventListener)
      // NK: Works on all new browsers
      wrapper.addEventListener("scroll", scroller, false);
    else if (wrapper.attachEvent)
      // NK: Works on old IE
      wrapper.attachEvent("onscroll", scroller);
  }

  ngOnInit(): void {
    this.bigFunc();
    this.arrayBuilder(); //ff;pf;sm;lf;if;2hm;5hm;rw; reg;ur;cny;trn;
    //this.ok(); //this.o();
    console.log(this.obse);
    this.obse.subscribe((res) => {
      console.log("ok +" + res),
        (error) => {
          console.log(error);
        },
        () => {
          this.n = "asd";
          console.log("completed!");
        };
    });
  }
  n = "Ionized Ideals ";
  observer = {
    next: (x) => console.log("Observer got a next value: " + x),
    error: (err) => console.error("Observer got an error: " + err),
    complete: () => console.log("Observer got a complete notification"),
  };
  observable = of(1, 2, 3, "ds");
  obse = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });
  o() {
    //imaburden
    this.observable.subscribe(this.observer);
  } //rusty?
  o2() {
    let obs = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.complete();
    }).pipe(observeOn(asyncScheduler)); //73182 / 62071
  }

  btn = document.createElement("button");

  ok() {
    let btn = document.createElement("button");
    this.btn.innerHTML = "CLICK ME"; // Insert text
    document.body.appendChild(this.btn); // Append <button> to <body>
    this.btn.addEventListener("click", (event) => {
      console.log(event);
      console.log(this.n);
    });
  }

  ok2() {
    for (let i = 0; i < 70; i++) {
      this.ok();
    }
  }

  arrayBuilder() {
    var array = {};
    for (let i = 0; i < 5; i++) {
      array["ok" + i] = [];

      for (let j = 0; j < 3; j++) {
        array["ok" + i].push(j * i);
      }
      console.log(array["ok" + i]);
    }
    console.log(array);
  }

  ele = document.getElementsByClassName("ele");

  // n2=document.getElementsByTagName();
}
//a1b2c3d4e5f6g7h8i9j10k11l12m13n14o15p16q17r18s19t20u21v22w23x24y25z26
//19 21 9 18 1 4 18 15 / 192191814RO
