import { Component } from "@angular/core";
import { ok } from "assert";
import { LanguageService } from "./language.service";
import { ProductsService } from "./products/products.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    public lang: LanguageService,
    public productsService: ProductsService
  ) {}
  title = "prolift";

  onActivate(event) {
    //SCROLL TO ANY COORDINATE IN THE SCREEN. VERY COOL
    //window.scroll(0, 0); // (X AXIS,Y AXIS) FROM TOP-RIGHT/LEFT OF SCREEN
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }
  //direction = lang.langDirection;
}
