import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { DemoMaterialModule } from "../material-module";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

const aboutRoutes: Routes = [{ path: "", component: AboutComponent }];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    DemoMaterialModule,
    FormsModule,
    RouterModule.forChild(aboutRoutes),
  ],
})
export class AboutModule {}
