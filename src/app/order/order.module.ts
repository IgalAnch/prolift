import { NgModule } from "@angular/core";
import { OrderComponent } from "./order.component";
import { DemoMaterialModule } from "../material-module";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

const orderRoutes: Routes = [{ path: "", component: OrderComponent }];

@NgModule({
  declarations: [OrderComponent],
  imports: [
    DemoMaterialModule,
    FormsModule,
    RouterModule.forChild(orderRoutes),
  ],
})
export class OrderModule {}
