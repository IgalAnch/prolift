import { HomepageComponent } from "./homepage.component";
import { NgModule } from "@angular/core";
import { DemoMaterialModule } from "../material-module";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

const homepageRoutes: Routes = [{ path: "", component: HomepageComponent }];

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    DemoMaterialModule,
    FormsModule,
    RouterModule.forChild(homepageRoutes),
  ],
})
export class HomepageModule {}

//red-kite-wild = 1 fumpop 1pop | (s tbf)=>+pop ->| synkron=>AFD->NV->+card+1kLP+res //nt[resonator + kite(gy)]
//red-kite-wild-synk-ANY (s tbf) = gg
