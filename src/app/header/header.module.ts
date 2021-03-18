import { HeaderComponent } from "./header.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DemoMaterialModule } from "../material-module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [HeaderComponent],
  imports: [FormsModule, DemoMaterialModule, CommonModule],
})
export class HeaderModule {}
