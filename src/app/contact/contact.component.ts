import { HttpRequest, HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  //template: '<button (click)="myFunction()"> ZXASAS</button>',
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  //when class is first instantiated
  constructor(private http: HttpClient) {
    // this.myFunction();
    // this.myFunction();
    // this.myFunction();
    // this.myFunction();
  }

  ngOnInit(): void {
    // this.myFunction();
    // this.myFunction();
    // this.myFunction();
    // this.myFunction();
    // this.myFunction();
    // this.myFunction();
    // document.addEventListener('build',()=>{this.myFunction()}, false);
    // let event1 = document.createEvent('Event');
    // event1.initEvent('build', true, true);
    // setTimeout(()=>{document.dispatchEvent(event1);},3000);
  }

  btn2 = document.createElement("BUTTON2");

  h1 = document.addEventListener(
    "build",
    () => {
      this.myFunction();
    },
    false
  );
  event2 = document.createEvent("Event");
  h3 = this.event2.initEvent("build", true, true);

  myFunction() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "CLICK ME";
    document.body.appendChild(btn);
    btn.onclick = () => {
      this.myFunction2();
    };
    btn.setAttribute("style", "height: 40px;");
    // btn.setAttribute("style","width: 200px;");
    // btn.setAttribute("class","btn btn-primary");
  }

  myFunction2() {
    //document.addEventListener('build',()=>{this.btn2}, false);
  }

  httpReq() {
    this.http.get("http://localhost:3001/users").subscribe((res) => {
      console.log("response received! (from 'users')");
      console.log(res);
      let s: String = "asddsfsdf";
      let o: Object = s;
      console.log(o);
      this.add(o);
    });
  }
  add(ob: Object) {
    let b = ob;
    let c = ["asdasd"];
    let oz = { ...b };
    console.log(oz);
  }
  onSubmit(n) {}
}
//
