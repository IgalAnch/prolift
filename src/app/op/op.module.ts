import { OpComponent } from "./op.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DemoMaterialModule } from "../material-module";

const opRoutes: Routes = [{ path: "", component: OpComponent }];

@NgModule({
  declarations: [OpComponent],
  imports: [FormsModule, DemoMaterialModule, RouterModule.forChild(opRoutes)],
})
export class OpModule {}
