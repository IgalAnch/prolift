import { PageNotFoundComponent } from "./page-not-found.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DemoMaterialModule } from "../material-module";

const pageNotFoundRoutes: Routes = [
  { path: "", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    FormsModule,
    DemoMaterialModule,
    RouterModule.forChild(pageNotFoundRoutes),
  ],
})
export class PageNotFoundModule {}
