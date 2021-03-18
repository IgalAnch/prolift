import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { ActivatedRoute, Params } from "@angular/router";

@Injectable({ providedIn: "root" })
export class LanguageService {
  constructor(public router: Router, public route: ActivatedRoute) {}

  id: number;

  langDirection = "rtl";

  ltr() {
    this.langDirection = "ltr";
  }

  rtl() {
    this.langDirection = "rtl";
  }

  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl(".", { skipLocationChange: true });
    return this.router.navigateByUrl(url);
  }

  //  refresh(){
  //    this.route.params.subscribe(next:(params: Params)=>{
  //      this.id=+params.id;
  //    })
  //  }
}
