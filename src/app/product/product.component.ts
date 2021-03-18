import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "../products/products.service";
import { interval, fromEvent } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  constructor(
    private _Activatedroute: ActivatedRoute,
    public products: ProductsService,
    private router: Router
  ) {
    console.log(products.p);
    async function ok() {
      products.getDatabase();
    }
    this._Activatedroute.paramMap.subscribe((params) => {
      this.id = params.get("id");
      //this.product.properties.push(params.get('id'));
    });
    //inf scroll.'''''''''''''''''''''''
    fromEvent(document, "click")
      .pipe(
        // restart counter on every click
        switchMap(() => interval(1000))
      )
      .subscribe(console.log);

    ok();
  }

  id;

  testP() {
    console.log(this.products.p);
    console.log(this.products.p[0].id);
  }

  ngOnInit(): void {
    // const righto = document.getElementById("id1");
    // righto.style.display = "block";
  }

  ok() {
    console.log(this.products.p);
  }

  onSubmit(c) {}

  tmiha() {
    this.router.navigate(["tech-landing"]);
  }
}
