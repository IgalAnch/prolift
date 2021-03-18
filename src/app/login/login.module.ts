import { LoginComponent } from "./login.component";
import { NgModule } from "@angular/core";
import { DemoMaterialModule } from "../material-module";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

const loginRoutes: Routes = [{ path: "", component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    DemoMaterialModule,
    FormsModule,
    RouterModule.forChild(loginRoutes),
  ],
})
export class LoginModule {}
