import { BrowserModule } from "@angular/platform-browser";
import { forwardRef, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//components
import { HomepageComponent } from "./homepage/homepage.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductComponent } from "./product/product.component";
import { LoginComponent } from "./login/login.component";

//FONT_AWESOME
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

//Language Service
import { LanguageService } from "./language.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Material Module
import { DemoMaterialModule } from "./material-module";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
//import { GraphQLModule } from './graphql.module';

//Apollo-angular
import { OpComponent } from "./op/op.component";
import { GraphQLModule } from "./graphql.module";

//CASL
// import { AbilityModule } from "@casl/angular";
// import { Ability, PureAbility } from "@casl/ability";

//PLACE IN CORRECT CATEGORIES

//import { AbilityModule } from "@casl/angular";
//import { Ability, PureAbility } from "@casl/ability";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    OpComponent,
  ],
  imports: [
    //AbilityModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    //RegisteredRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    DemoMaterialModule,

    GraphQLModule, //DOES THIS DO ANYTHING ?//now it does
    //************* */
    //ApolloFactoryService, //semi-custom apollo-factory

    //ContactModule,
    //AboutModule,

    // AbilityModule,
  ],
  providers: [
    // { provide: Ability, useValue: new Ability() },
    // { provide: PureAbility, useExisting: Ability },
  ],
  bootstrap: [AppComponent],
  //exports: [DemoMaterialModule], //is this even correct??
})
export class AppModule {}
//experiemnt
//   constructor(/*apollo: Apollo, httpLink: HttpLink*/) {
//     // const http = httpLink.create({
//     //   uri: "http://localhost:3000/graphql",
//     //   withCredentials: true,
//     // });
//     // const authMiddleware = new ApolloLink((operation, forward) => {
//     //   operation.setContext({
//     //     headers: new HttpHeaders().set(
//     //       "Authorization",
//     //       localStorage.getItem("token") || null
//     //     ),
//     //   });
//     //   return forward(operation);
//     // });
//     // const authMiddleware = new ApolloLink((operation, forward) => {
//     //   // add the authorization to the headers
//     //   // we assume `headers` as a defined instance of HttpHeaders
//     //   operation.setContext(({ headers }) => ({
//     //     headers: headers.append(
//     //       "Authorization",
//     //       localStorage.getItem("token") || null
//     //     ),
//     //   }));
//     //   return forward(operation);
//     // });

//     // const authMiddlewareDummy = new ApolloLink((operation, forward) => {
//     //   operation.setContext(({ headers }) => ({
//     //     headers: headers.append("ok", "soka"),
//     //   }));
//     //   return forward(operation);
//     // });

//     // const link1 = from([authMiddlewareDummy, http]);
//     const link1 = http;
//     //const link1 = from([authMiddleware, authMiddlewareDummy, http]);

//     const client = new ApolloClient({
//       link: link1 as any,
//       cache: new InMemoryCache(),
//     });

//     //const link = ApolloLink.from([authMiddlewareDummy, http]);
//     apollo.create(client);
//     //apollo.create({ link: from([authMiddleware, http]) });
//     //apollo.create;
//   }
// }
