import { Component, OnInit } from "@angular/core";

//active route - MOVED TO LANG SERVICE
import { ActivatedRoute, Params } from "@angular/router";

//FONT-AWESOME
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { LanguageService } from "../language.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  id: number;

  constructor(public lang: LanguageService) {}

  ngOnInit(): void {}

  faTrash = faTrash;
}
