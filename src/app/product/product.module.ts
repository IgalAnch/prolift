import { NgModule } from "@angular/core";
import { ProductComponent } from "./product.component";
import { DemoMaterialModule } from "../material-module";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

const productRoutes: Routes = [{ path: "", component: ProductComponent }];

@NgModule({
  declarations: [ProductComponent],
  imports: [
    DemoMaterialModule,
    FormsModule,
    RouterModule.forChild(productRoutes),
    CommonModule,
  ],
})
export class ProductModule {}
