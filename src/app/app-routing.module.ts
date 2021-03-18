import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { AboutComponent } from "./about/about.component";
import { ProductsComponent } from "./products/products.component";
import { OrderComponent } from "./order/order.component";
import { TechComponent } from "./tech/tech.component";
import { ContactComponent } from "./contact/contact.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductComponent } from "./product/product.component";
import { LoginComponent } from "./login/login.component";
import { OpComponent } from "./op/op.component";
import { AuthGuard } from "./auth/auth.guard";
import { AdminComponent } from "./admin/admin.component";
import { HideoutComponent } from "./hideout/hideout.component";

//PRELOAD IMAGES IDEA ================================

function loadImages() {
  let images3 = ["assets/banners/layer_25.jpg"];
  for (let i = 0; i < images3.length; i++) {
    let img = new Image();
    img.onload = () => {
      this.loaded(images3);
      console.log("OKEY");
    };
    img.src = images3[i];
  }
}

function loaded(images) {
  this.loaded2++;
  if (images.length == this.loaded2) {
    //all images loaded
  }
}

const routes: Routes = [
  {
    path: "",
    //redirectTo: "/home",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "admin",
    //redirectTo: "/home",
    component: AdminComponent,
    pathMatch: "full",
  },
  {
    path: "hideout",
    //redirectTo: "/home",
    component: HideoutComponent,
    pathMatch: "full",
  },
  {
    path: "tech",
    redirectTo: "/tech-verified",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./homepage/homepage.module")
        .then((file) => {
          loadImages();
          return file;
        })
        .then((file) => file.HomepageModule),
    data: { preload: true },
  },
  {
    path: "about",
    loadChildren: () =>
      import("./about/about.module").then((file) => file.AboutModule),
    //data: { preload: true },
    //canLoad: [AuthGuard] //not actually needed in this module/component
  },
  {
    path: "tech-landing",
    loadChildren: () =>
      import("./tech/tech-landing/tech-landing.module").then(
        (file) => file.TechLandingModule
      ),
  },
  {
    path: "products",
    loadChildren: () =>
      import("./products/products.module").then((file) => file.ProductsModule),
  },
  //
  {
    path: "order",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./order/order.module").then((file) => file.OrderModule),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./contact/contact.module").then((file) => file.ContactModule),
    data: { preload: true },
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((file) => file.LoginModule),
    data: { preload: true },
  }, //mnrch gnx
  //kpr;nf;neo;2ice;2lgt;1mnc;3cnd;2kc;3vs;frg;plg;gub;jb
  //brd;crl;bn;hma;zet;ac;brnc

  //3vt;3vei;kpr;nf;neo;2fg;wd;drwn;3sg;1wch;3bs ;ff;3spff ;2bus;2 -qntt

  {
    path: "tech-verified",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./tech/tech.module").then((file) => file.TechModule),
  },

  { path: "product/:id", component: ProductComponent }, //delete this
  { path: "op", component: OpComponent },
  {
    path: "**",
    loadChildren: () =>
      import("./page-not-found/page-not-found.module").then(
        (file) => file.PageNotFoundModule
      ),
    data: { preload: true },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' })], // <-- disable in production
  exports: [RouterModule],
})
export class AppRoutingModule {}
