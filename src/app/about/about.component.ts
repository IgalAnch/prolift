import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  // template: `<div>HELLO</div>
  //   <div>HELLO</div>
  //   <div>HELLO</div>`,
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let inventory = [
      {
        id: 0,
        name: "Red Resonator",
        type: "F",
        filters: ["SS", "LP"],
        ok: { o: "p", k: "l" },
      },
      { name: "Jerry B", type: "P", filters: ["normal", "b"] },
      { name: "RL", type: "P", filters: ["SS", "GY"] },
      { name: "Magical Exmp", type: "S", filters: ["SC", "GY", "SS"] },
      { name: "Ha Des", type: "F", filters: ["NE", "T"] },
      { name: "Des", type: "F", filters: ["NE", "T"] },
    ];

    //  const result =inventory.find(({filters})=>filters.find((element)=>element==="SC"));
    //  console.log(result);

    this.searchAll(inventory, "SS");
  }

  searchAll(arr, key) {
    //console.log(arr);

    let result = arr.find(({ filters }) =>
      filters.find((element) => element === key)
    );
    let donkey = arr.findIndex(({ filters }) =>
      filters.find((element) => element === key)
    );
    console.log("donkey: " + donkey);
    console.log(result);
    let b: boolean;

    if (result === undefined) {
      return console.log("we done");
    } else {
      let arr2 = arr.splice(donkey, 1);
      console.log("3:");
      console.log(arr);
      return this.searchAll(arr, key);
    }
  }

  onSubmit(fArg) {}

  sendReq() {
    this.http.get("http://localhost:3000/req").subscribe((res) => {
      console.log(res);
    });
  }
}
