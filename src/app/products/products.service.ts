import { Injectable } from "@angular/core";

//Apollo gql
import { Apollo, gql } from "apollo-angular";

import { map, filter } from "rxjs/operators";
import { Router } from "@angular/router";
import { SELECT_MULTIPLE_PANEL_PADDING_X } from "@angular/material/select";

class ok2 {
  text: string = "";
}

class ok {
  id: number = 0;
  name: string = "";
  type: string = "";
  image: string = "";
  properties: [ok2];
}

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private apollo: Apollo, public router: Router) {}

  // p = [new ok()];
  p = null;
  pd = null;

  temp = [];

  pageInd = 0;
  pageSize = 8;
  matoElement;

  fetchRequest2(query1, vars1) {
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
        this.temp = result;
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

  async infScroll() {
    console.log(mat);
    var mat, bMat;
    this.matoElement = await document.getElementsByClassName(
      "mat-tab-body-active"
    )[0];
    console.log("henlo");
    console.log(this.matoElement);
    console.log("henl.o");
    // console.log("matElement document.getElementByClass = ");
    // console.log(matElement);
    //bMat = document.getElementById("prod");
    //mat = document.getElementById("productsAll"); //getBYClassname instead

    window.addEventListener("scroll", this.scroller, false);
  }

  scroller(e) {
    console.log(e);
    //console.log(bMat);
    // var n = bMat.offsetHeight;
    // console.log("n= " + n);
    //var s = mat.scrollTop;
    //console.log("scrolltop= " + s);
    console.log("bounding rectangle-");
    console.log(this.matoElement.getBoundingClientRect());
    //console.log(this.products.productTypes);
    if (this.matoElement.getBoundingClientRect().top < 0) {
      console.log("am i here");
      let products__all = document.getElementsByClassName("products__all")[0];
      if (products__all instanceof HTMLElement) {
        let h = products__all.offsetHeight;
        console.log(h);
        console.log("am i here2");
        var take1 = this.pageSize;
        var skip1 = this.pageSize;
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
        let a = this.apollo
          .watchQuery({
            query: productFetch_byType_query, //productFetch_byType_query /*this.GET_PRODUCT*/,
            variables: vars,
            fetchPolicy:
              "network-only" /*for test purposes. this emits cache fetch*/,
          })
          .valueChanges.pipe(map((result: any) => result.data.productGetWhere))
          .subscribe((result) => {
            console.log(result);
            this.temp = result;
            let products__all = document.getElementsByClassName(
              "products__all"
            )[0];
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

        //products__all.innerHTML += more;
      }
    }
  }
  console123() {
    console.log("im console hello");
  }

  buildPd() {
    this.pd = [];
    let min = this.pageSize * this.pageInd;
    let max = min + this.pageSize - 1;
    for (min; min <= max; min++) {
      console.log(min);
      console.log(max);
      console.log(this.p.length);
      if (min > this.p.length) {
        break;
      }
      this.pd.push(this.p[min]);
    }
  }

  p2 = [
    {
      name: "כאן יופיע שם המוצר",
      type: "יחידות פיקוד ובקרה",
      image: "assets/product2.png",
      properties: [
        "HiTech SMT technology",
        "Control voltage (Safety line) 24 vdc",
        "Main contactors modular high voltage driver card: Power transistors for up to 110Vdc or Dry contacts for 230Vac",
        "Dual LED indication for all inputs: Green = OK, Red NO signal",
        "LED indication for all outputs",
        "Advanced Real Time fault indication by blinking the corresponding LED of the input that caused the fault",
        "User friendly maintenance",
        "Simple and quick fault diagnostic",
        "Support Digital Floor Position Indicator",
        "Optional support for unlocked landing doors detection (according to Russian standard)",
      ],
    },
    {
      name: "כאן יופיע שם המוצר",
      type: "בקרי דלתות",
      image: "assets/product1.png",
      properties: [
        "LED indication for all outputs",
        "Advanced Real Time fault indication by blinking the corresponding LED of the input that caused the fault",
        "User friendly maintenance",
        "Simple and quick fault diagnostic",
        "Support Digital Floor Position Indicator",
        "Optional support for unlocked landing doors detection (according to Russian standard)",
        "Solar and Batterry operatable simultaneously",
        "Looks cool",
      ],
    },
    {
      name: "כאן יופיע שם המוצר",
      type: "ווסתי מהירות",
      image: "assets/product3.png",
      properties: [
        "Original elevator gadget",
        "Made of Reinforced Carbonated Alloy",
        "Waterproof",
        "Lightweight",
        "Support Digital Floor Position Indicator",
        "Optional support for unlocked landing doors detection (according to Russian standard)",
        "Solar and Batterry operatable simultaneously",
        "Builtin clock",
      ],
    },
    {
      name: "כאן יופיע שם המוצר",
      type: "אביזרים",
      image: "assets/products_6.jpg",
      properties: [
        "Original elevator gadget",
        "Made of Reinforced Carbonated Alloy",
        "Waterproof",
        "Lightweight",
        "Support Digital Floor Position Indicator",
        "Optional support for unlocked landing doors detection (according to Russian standard)",
        "Solar and Batterry operatable simultaneously",
        "Builtin clock",
      ],
    },
    {
      name: "כאן יופיע שם המוצר",
      type: "יחידות בקרה משולבת",
      image: "assets/products_4.jpg",
      properties: [
        "Original elevator gadget",
        "Made of Reinforced Carbonated Alloy",
        "Waterproof",
        "Lightweight",
        "Support Digital Floor Position Indicator",
        "Optional support for unlocked landing doors detection (according to Russian standard)",
        "Solar and Batterry operatable simultaneously",
        "Builtin clock",
      ],
    },
    {
      name: "כאן יופיע שם המוצר",
      type: "יחידות בקרה משולבת",
      image: "assets/products2.jpg",
      properties: [
        "Original elevator gadget",
        "Made of Reinforced Carbonated Alloy",
        "Waterproof",
        "Product6 complimentary text",
      ],
    },
    {
      name: "כאן יופיע שם המוצר",
      type: "יחידות בקרה משולבת",
      image: "assets/pts2.jpg",
      properties: [
        "Original elevator gadget",
        "Made of Reinforced Carbonated Alloy",
        "Waterproof",
        "Product6 complimentary text",
      ],
    },
    {
      name: "כאן יופיע שם המוצר",
      type: "יחידות בקרה משולבת",
      image: "assets/pts2.jpg",
      properties: [
        "Original elevator gadget",
        "Made of Reinforced Carbonated Alloy",
        "Waterproof",
        "Product6 complimentary text",
      ],
    },
    {
      name: "כאן יופיע שם המוצר",
      type: "יחידות בקרה משולבת",
      image: "assets/pts2.jpg",
      properties: [
        "Original elevator gadget",
        "Made of Reinforced Carbonated Alloy",
        "Waterproof",
        "Product6 complimentary text",
      ],
    },
    {
      name: "כאן יופיע שם המוצר",
      type: "יחידות בקרה משולבת",
      image: "assets/pts2.jpg",
      properties: [
        "Original elevator gadget",
        "Made of Reinforced Carbonated Alloy",
        "Waterproof",
        "Product6 complimentary text",
      ],
    },
    {
      name: "כאן יופיע שם המוצר",
      type: "יחידות בקרה משולבת",
      image: "assets/pts2.jpg",
      properties: [
        "Original elevator gadget",
        "Made of Reinforced Carbonated Alloy",
        "Waterproof",
        "Product6 complimentary text",
      ],
    },
  ];

  INPUT_PRODUCT = gql`
    mutation(
      $name: String!
      $type: String!
      $image: String!
      $properties: [String!]!
    ) {
      add_product(
        name: $name
        type: $type
        image: $image
        properties: $properties
      ) {
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

  a = `query {
    productAll {
      id
      name
      type
      image
      properties`;
  b = `{
        id
        text
        }
      }
    }`;

  createUpdateQuery() {
    let s = `mutation BigMutation {`;
    for (let i = 0; i < this.p2.length; i++) {
      let prop = ``;
      for (let j = 0; j < this.p2[i].properties.length; j++) {
        let o = `"${this.p2[i].properties[j]}",`;
        prop = prop + o;
      }
      prop = prop + ``;
      let str = `q${i}: `;
      let str2 = `add_product(name:"${this.p2[i].name}",type:"${this.p2[i].type}",image:"${this.p2[i].image}",properties:[${prop}]){
              id
              name
              type
              image
              properties {
                id
                text 
              }
          }`;
      console.log(str);
      console.log(str2);
      s = s + str + str2;
    }
    console.log(s);
    s = s + `}`;
    return s;
  }

  async updateDatabase() {
    //.valueChanges//.pipe(map((result:any) => result.data.character))  //<= PIPE
    for (let i = 0; i < this.p2.length; i++) {
      //    - WILL BE REPLACED -
      console.log("req no " + i);
      let INPUT_PRODUCT_VARIABLES = {
        name: this.p2[i].name,
        type: this.p2[i].type,
        image: this.p2[i].image,
        properties: this.p2[i].properties,
      };
      this.apollo
        .mutate({
          mutation: this.INPUT_PRODUCT,
          variables: INPUT_PRODUCT_VARIABLES,
        })
        .subscribe((result) => {
          console.log(result);
        });
      console.log("req no " + i + " done");
      await console.log("no " + i + " done");
    }
  }

  async updateDatabase2() {
    let b = "" + this.createUpdateQuery();
    console.log(b);
    let c = gql`
      ${b}
    `;
    this.apollo.mutate({ mutation: c }).subscribe((result) => {
      console.log("results: ");
      console.log(result);
    });
  }

  async getDatabase() {
    //console.log(this.GET_PRODUCT)
    let d = this.a + this.b;
    let c = gql`
      ${d}
    `;
    let ap = await this.apollo
      .watchQuery({
        query: c /*this.GET_PRODUCT*/,
        fetchPolicy:
          "network-only" /*for test purposes. this emits cache fetch*/,
      })
      .valueChanges.pipe(map((result: any) => result.data.productAll))
      .subscribe(
        (result) => {
          this.p = result;
          console.log("right");
          console.log(result);
          this.buildPd();
        },
        //on error
        (error) => {
          console.log(error);
          this.router.navigate(["login"]);
        }
      );
    console.log(typeof this.b);
  }

  GET_PRODUCT = gql`
    query {
      productAll {
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

  productTypes = [];
  productTypes_pageInd = [];
  productTypes_products = {};
  currentTab = null;

  async getProductTypes() {
    let productTypes_query = gql`
      query {
        getProductTypes {
          id
          typename
          amount
        }
      }
    `;
    let ap = await this.apollo
      .watchQuery({
        query: productTypes_query /*this.GET_PRODUCT*/,
        fetchPolicy:
          "network-only" /*for test purposes. this emits cache fetch*/,
      })
      .valueChanges.pipe(map((result: any) => result.data.getProductTypes))
      .subscribe((result) => {
        this.productTypes = result; //
        for (let i = 0; i < this.productTypes.length; i++) {
          this.productTypes_pageInd.push(0);
        }
      });
  }

  async getTypeProducts(event) {
    let typeInd = event.index;
    let take1 = this.pageSize;
    let skip1 = this.productTypes_pageInd[typeInd - 1] * this.pageSize;
    let type1 = this.productTypes[typeInd - 1].typename;
    this.currentTab = type1;
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
    let ap = await this.apollo
      .watchQuery({
        query: productFetch_byType_query /*this.GET_PRODUCT*/,
        variables: vars,
        fetchPolicy:
          "network-only" /*for test purposes. this emits cache fetch*/,
      })
      .valueChanges.pipe(map((result: any) => result.data.productGetWhere))
      .subscribe((result) => {
        console.log(result);
        this.productTypes_products[
          this.productTypes[typeInd - 1].typename
        ] = result;
      });
  }

  async getTypeProducts_pagination(event) {
    console.log(event.pageIndex);
    this.productTypes_pageInd[this.currentTab] = event.pageIndex;
    let take1 = this.pageSize;
    let skip1 = this.productTypes_pageInd[this.currentTab] * this.pageSize;
    let type1 = this.productTypes[this.currentTab].typename;
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
    let ap = await this.apollo
      .watchQuery({
        query: productFetch_byType_query /*this.GET_PRODUCT*/,
        variables: vars,
        fetchPolicy:
          "network-only" /*for test purposes. this emits cache fetch*/,
      })
      .valueChanges.pipe(map((result: any) => result.data.productGetWhere))
      .subscribe((result) => {
        console.log(result);
        this.productTypes_products[
          this.productTypes[this.currentTab].typename
        ] = result;
      });
  }
}
