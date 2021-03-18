import { NgModule } from "@angular/core";
import { TechComponent } from "./tech.component";
import { DemoMaterialModule } from "./../../app/material-module";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

const techRoutes: Routes = [{ path: "", component: TechComponent }];

@NgModule({
  declarations: [TechComponent],
  imports: [
    DemoMaterialModule,
    FormsModule,
    RouterModule.forChild(techRoutes),
    CommonModule,
  ],
})
export class TechModule {}
