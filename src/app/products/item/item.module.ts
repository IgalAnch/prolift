import { NgModule } from "@angular/core";
//import { ProductsComponent } from "./products.component";
import { DemoMaterialModule } from "../../material-module";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ItemComponent } from "./item.component";

const itemRoutes: Routes = [{ path: "donkeyy", component: ItemComponent }];

@NgModule({
  // declarations: [ItemComponent],
  imports: [
    DemoMaterialModule,
    FormsModule,
    CommonModule,

    RouterModule.forChild(itemRoutes),
  ],
})
export class ItemModule {}
