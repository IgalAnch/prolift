import { ContactComponent } from "./contact.component";
import { NgModule } from "@angular/core";
import { DemoMaterialModule } from "../material-module";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

const contactRoutes: Routes = [{ path: "", component: ContactComponent }];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    DemoMaterialModule,
    FormsModule,
    RouterModule.forChild(contactRoutes),
  ],
})
export class ContactModule {}
