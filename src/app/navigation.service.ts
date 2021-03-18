import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  prevRoute = "";
  s;
}
