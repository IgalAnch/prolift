import { Component, OnInit, Input } from "@angular/core";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent implements OnInit {
  @Input() colu;
  constructor(public products: ProductsService) {}

  ngOnInit(): void {}
}
