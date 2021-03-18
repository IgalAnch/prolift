import { APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { ApolloLink, InMemoryCache } from "@apollo/client/core";
import { NgModule } from "@angular/core";

const fetchOptions = { credentials: "include" };

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: "http://localhost:3000/graphql",
            withCredentials: true,
          }),
          fetchOptions: { withCredentials: true },
          withCredentials: true,
        };
      },
      deps: [HttpLink],
    },
    //experiment(failed)
  ],
})
export class ApolloFactoryService {}
