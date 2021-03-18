import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./products.service";
import { PageEvent } from "@angular/material/paginator";
import { buildDriverProvider } from "protractor/built/driverProviders";
import { ScrollDispatcher } from "@angular/cdk/overlay";
import { Apollo, gql } from "apollo-angular";
import { map, filter } from "rxjs/operators";
//import { ItemComponent } from './item/item.component';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  constructor(public products: ProductsService, public apollo: Apollo) {
    products.getProductTypes();
    products.getDatabase();
  }

  ngOnInit(): void {
    this.testBounding();
  }

  ngAfterViewInit(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.

    this.infScroll();
  }

  testBounding() {
    console.log("hi");
    var c = document.getElementsByClassName("matTabGroup")[0];
    console.log(c.getBoundingClientRect());
    console.log("end-of-hi");
  }
  infScroll2() {
    //console.log(mat);
    //var mat, bMat;
    // this.products.matoElement = document.getElementsByClassName(
    //   "mat-tab-body-active"
    // )[0];
    // console.log("matElement document.getElementByClass = ");
    // console.log(matElement);
    //bMat = document.getElementById("prod");
    //mat = document.getElementById("productsAll"); //getBYClassname instead

    window.addEventListener("scroll", this.products.scroller, false);
  }
  makeCall(query1, vars1, apollo1) {
    return apollo1
      .watchQuery({
        query: query1 /*this.GET_PRODUCT*/,
        variables: vars1,
        fetchPolicy:
          "network-only" /*for test purposes. this emits cache fetch*/,
      })
      .valueChanges.pipe(map((result: any) => result.data.productGetWhere));
  }

  matoElement;

  getElement() {
    this.matoElement = document.getElementsByClassName(
      "mat-tab-body-active"
    )[0];
    console.log("OK");
    console.log(this.matoElement);
  }

  infScroll() {
    // this.matoElement = document.getElementsByClassName(
    //   "mat-tab-body-active"
    // )[0];
    window.addEventListener("scroll", this.scroller.bind(this), false); //BIND THIS THIS
  }

  scroller(e) {
    console.log(e);
    let ook = document.getElementsByClassName("mat-tab-body-active")[0];
    console.log("bounding rectangle-");
    console.log(ook.getBoundingClientRect());
    if (ook.getBoundingClientRect().top < 0) {
      console.log("am i here");
      let products__all = document.getElementsByClassName("products__all")[0];
      if (products__all instanceof HTMLElement)
        var h = products__all.offsetHeight;
      console.log(h);
      console.log("am i here2");
      var take1 = 8;
      var skip1 = 8;
      var type1 = "הכל"; //this.products.productTypes[0].typename;
      let productFetch_byType_query = gql`
        query OK($take: Float!, $skip: Float!, $type: String!) {
          productGetWhere(take: $take, skip: $skip, type: $type) {
            id
            name
            type
            image
            properties {
              id
              text
            }
          }
        }
      `;
      let vars = {
        take: take1,
        skip: skip1,
        type: type1,
      };
      this.products.fetchRequest2(productFetch_byType_query, vars); //doesnt work
    }
  }

  fetchRequest(query1, vars1) {
    let ap = this.apollo
      .watchQuery({
        query: query1 /*this.GET_PRODUCT*/,
        variables: vars1,
        fetchPolicy:
          "network-only" /*for test purposes. this emits cache fetch*/,
      })
      .valueChanges.pipe(map((result: any) => result.data.productGetWhere))
      .subscribe((result) => {
        console.log(result);
        this.products.temp = result;
        let products__all = document.getElementsByClassName("products__all")[0];
        products__all.innerHTML += `                <div *ngFor="let cols of products.temp; let co = index" class="products__all__product_all{{co}}">
  <button class="overlay-button" [routerLink]="['/product', co ]">לדף מוצר</button>
  <button class="overlay-order">
    <img src="assets/products_order.png"/>
  </button>
  <div class="products__all__product-overlay">
    <div class="__product__text-overlay">
      <div class="__product__type-overlay">{{products.temp[co]==null?null:products.temp[co].type}}</div>
      <div class="__product__name-overlay">{{products.temp[co]==null?null:products.temp[co].name}}</div>
    </div>
  </div>
  <img src="{{products.temp[co]==null?null:products.temp[co].image}}">
  <div class="__product__text">
    <div class="__product__type">{{products.temp[co]==null?null:products.temp[co].type}}</div>
    <div class="__product__name">{{products.temp[co]==null?null:products.temp[co].name}}</div>
  </div>
</div>
</div>`;
      });
  }

  slt = "<div>2jus;1jes;1jser;2qb;2rw;1qd;1ss;3cv;2fg;3cd;ol;bs;fl</div>";
  ed = "<div>mw;jd;jw;scw/ja;saw;jw;cdcs;</div>";

  elemHeight = 1000;

  console123() {
    console.log("im console hello");
  }
  getExtraProducts() {
    var take1 = 8;
    var skip1 = 8;
    var type1 = this.products.productTypes[0].typename;
    let productFetch_byType_query = gql`
      query OK($take: Float!, $skip: Float!, $type: String!) {
        productGetWhere(take: $take, skip: $skip, type: $type) {
          id
          name
          type
          image
          properties {
            id
            text
          }
        }
      }
    `;
    let vars = {
      take: take1,
      skip: skip1,
      type: type1,
    };
    let ap = this.apollo
      .watchQuery({
        query: productFetch_byType_query /*this.GET_PRODUCT*/,
        variables: vars,
        fetchPolicy:
          "network-only" /*for test purposes. this emits cache fetch*/,
      })
      .valueChanges.pipe(map((result: any) => result.data.productGetWhere))
      .subscribe((result) => {
        console.log(result);
        this.products.temp = result;
        let products__all = document.getElementsByClassName("products__all")[0];
        products__all.innerHTML += `                <div *ngFor="let cols of products.temp; let co = index" class="products__all__product_all{{co}}">
        <button class="overlay-button" [routerLink]="['/product', co ]">לדף מוצר</button>
        <button class="overlay-order">
          <img src="assets/products_order.png"/>
        </button>
        <div class="products__all__product-overlay">
          <div class="__product__text-overlay">
            <div class="__product__type-overlay">{{products.temp[co]==null?null:products.temp[co].type}}</div>
            <div class="__product__name-overlay">{{products.temp[co]==null?null:products.temp[co].name}}</div>
          </div>
        </div>
        <img src="{{products.temp[co]==null?null:products.temp[co].image}}">
        <div class="__product__text">
          <div class="__product__type">{{products.temp[co]==null?null:products.temp[co].type}}</div>
          <div class="__product__name">{{products.temp[co]==null?null:products.temp[co].name}}</div>
        </div>
      </div>
    </div>`;
      });
  }

  onSubmit(c) {}

  checkGraphql() {}
  //
  pageEvent(event: PageEvent) {
    console.log("<pageEvent");
    console.log(event);
    this.products.pageInd = event.pageIndex;
    this.products.buildPd();
  }

  checkEvent(event) {
    console.log(event);
  }
}
