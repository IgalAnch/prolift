import { NgModule } from "@angular/core";
import { TechLandingComponent } from "./tech-landing.component";
import { DemoMaterialModule } from "./../../material-module";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

const techLandingRoutes: Routes = [
  { path: "", component: TechLandingComponent },
];

@NgModule({
  declarations: [TechLandingComponent],
  imports: [
    DemoMaterialModule,
    FormsModule,
    RouterModule.forChild(techLandingRoutes),
    CommonModule,
  ],
})
export class TechLandingModule {}
