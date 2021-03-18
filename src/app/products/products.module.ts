import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { DemoMaterialModule } from "../material-module";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ItemModule } from "./item/item.module";
import { ItemComponent } from "./item/item.component";

const productsRoutes: Routes = [
  { path: "", component: ProductsComponent },
  { path: "donkey", component: ItemComponent },
];

@NgModule({
  declarations: [ProductsComponent, ItemComponent],
  imports: [
    DemoMaterialModule,
    FormsModule,
    RouterModule.forChild(productsRoutes),
    CommonModule,
    ItemModule,
  ],
})
export class ProductsModule {}
