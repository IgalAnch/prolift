import { Component, OnInit, AfterContentInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//
//import { Observable, observable } from 'rxjs';
import { Observable, of } from "rxjs";
import { from } from "rxjs";

//RXJS/operators
import { map, filter } from "rxjs/operators";

import { interval, Subscription } from "rxjs";

import { NgForm } from "@angular/forms";

//Apollo gql
import { Apollo, gql } from "apollo-angular";

const GET_USERS = gql`
  {
    user(id: 301) {
      id
      firstName
      lastName
      password
    }
  }
`;

const GET_CHARACTER = gql`
  {
    character(id: 7) {
      id
      name
      username
      level
      class
      specialty
      password
    }
  }
`;

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit {
  constructor(private http: HttpClient, private apollo: Apollo) {
    this.loadImages();
  }

  private observerSubscription: Subscription;

  ngOnInit(): void {
    this.func();
    this.newBtn();
  }

  ngOnDestroy(): void {
    //this.isFunc();
  }

  img2 = "assets/banners/layer_25.jpg";
  images = ["assets/banners/layer_25.jpg"];
  loaded2 = 0;

  loadImages() {
    let images3 = ["assets/banners/layer_25.jpg"];
    for (let i = 0; i < images3.length; i++) {
      let img = new Image();
      img.onload = () => {
        this.loaded();
        console.log("OKEY");
      };
      img.src = images3[i];
    }
  }

  loaded() {
    this.loaded2++;
    if (this.images.length == this.loaded2) {
      //all images loaded
    }
  }

  myObserver5 = {
    next: (x) => {
      console.log("x: ");
      console.log(x);
    },
    error: (err) => {
      console.log("error: ..");
      console.log(err);
    },
    complete: () => {
      console.log("complete: .. ");
      console.log();
    },
  };

  //useless/ practicing with basic observables
  func() {
    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 73) {
          observer.error(
            new Error("(not real error): Test error after 5 second(s).")
          );
        }
        if (count == 14) {
          console.log(count);
          observer.complete();
        }

        count++;
      }, 1000);
    });

    this.observerSubscription = customIntervalObservable
      .pipe(
        filter((data) => {
          return data > 2;
        }),
        map((data) => {
          return "Round: " + data;
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error);
        },
        () => {
          console.log("complete");
        }
      );
  }

  //useless/ practicing with basic unsubscribe, try/catch
  isFunc() {
    if (this.observerSubscription) {
      try {
        this.observerSubscription.unsubscribe();
        console.log("destroyed successfully");
      } catch {
        console.log("error observerSubscription doesnt exist");
      }
    } else {
      console.log("if/else statement works");
    }
  }

  obs() {}

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  }

  submit() {
    this.http.get("http://localhost:3001/stuf").subscribe((res) => {
      console.log(res);
    });
  }

  ar: number[] = [];
  newObservable;

  // Create observer object
  myObserver = {
    next: (y) => console.log("Observer got a next value: " + y),
    //previous: (x) => console.log("Observer got a next value: " + x),
    error: (err) => console.error("Observer got an error: " + err),
    complete: () => console.log("Observer got a complete notification"),
  };

  // Create observer object
  myObserver2 = {
    next: (y) => console.log("Observer got a next value: " + y),
    // (x) => console.log("Observer got a next value: " + x),
    error: (err) => console.error("Observer got an error: " + err),
    complete: () => console.log("Observer got a complete notification"),
  };

  newBtwn2() {
    // for (let i = 0; i < 10000; i++) {
    //   this.ar.push(i);
    // }
    this.newObservable = from(this.ar);
    this.newObservable.subscribe(this.myObserver2);
    // setTimeout(() => {
    //   this.newObservable.unsubscribe();
    // }, 5000);
  }

  newBtwn3() {
    // this.newObservable = from([1, 4, 6, 7, 8]);
  }

  myObservable = of<Number>(1, 2, 23, 453);

  // Execute with the observer object
  newBtn() {
    console.log("-observer5:");
    this.myObservable.subscribe(this.myObserver5);
    console.log("-manual observer:");
    this.myObservable.subscribe(
      (z) => {
        console.log("manual observer get : " + z);
      },
      (er) => {
        console.log("manual observer error : " + er);
      },
      () => {
        console.log("k");
      }
    );
  }

  getRandomNumber() {
    let no = 6;
    return no;
  }

  getRandomDelay() {
    return +Math.floor(Math.random() * 50);
  }

  ob = new Observable((sub) => {
    let timeout = null;

    // recursively send a random number to the subscriber
    // after a random delay
    (function push() {
      timeout = setTimeout(() => {
        sub.next(4);
        push();
      }, 10);
    })();

    // clear any pending timeout on teardown
    return () => clearTimeout(timeout);
  });

  btn4() {
    let a = { i: "ig", p: "12", fc: "rr", lfc: "mm" };
    let b = { c: "c", d: "d" };
    let c = { ...a, ...b };
    const { ...p } = a;
    console.log(a);
    // console.log(fc);
  }

  // onSubmit(form : HTMLFormElement){
  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value.company);
    this.http.get("http://localhost:3000/users/contact").subscribe((res) => {
      console.log(res);
    });
  }

  randomButton() {
    this.http
      .post("http://localhost:3000/users/c", {
        username: "unga23",
        email: "bu2nga13k221@ok.ok",
        password: "555ok123",
        firstName: "oke",
        lastName: "ayy",
      })
      .subscribe((response) => {
        console.log(response);
        console.log("okey");
      });
  }

  // users: Observable<any>;
  resData;
  loading;
  error;

  // this.http.get("http://localhost:3000/graphql?query={user3(id:300){firstName,password}}")
  // .subscribe((response)=>{console.log(response); console.log("okey");})
  //this.users=this.apollo.watchQuery({query: GET_USERS}).valueChanges.pipe(map(result=>result.data));
  testGraphql() {
    let od = 11;
    let GET_CHARACTER2 = gql` 
        query SomeFunction {
          character(id:${od}){
            id
            name
            username
            level
            class
            specialty
            password
          } 
        }
    `;
    this.apollo
      .watchQuery({
        query: GET_CHARACTER2,
      })
      .valueChanges //.pipe(map((result:any) => result.data.character))  //<= PIPE
      .subscribe((result: any) => {
        console.log(result);
        console.log(result.name); //poe: 10%10%/s/rc + jade/s/e + h/s/b + h/s/p + conc/s/rc
        // this.resData = result?.data?.character;
        // this.loading = result.loading;
        // this.error=result.error;
        // console.log("===users===");
        // console.log(this.resData);
        // console.log("==loading==");
        // console.log(this.loading);
        // console.log("==error==");
        // console.log(this.error);
      });
  }
}
