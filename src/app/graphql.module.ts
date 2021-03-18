import { NgModule } from "@angular/core";
import { APOLLO_OPTIONS } from "apollo-angular";
import {
  ApolloClientOptions,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client/core";
import { HttpLink } from "apollo-angular/http";
import { HttpClientModule } from "@angular/common/http";
import { setContext } from "@apollo/client/link/context";
// import { onError } from "@apollo/client/link/error";

const uri = "http://localhost:3000/graphql";

export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: "charset=utf-8",
    },
  }));
  const auth = setContext((operation, context) => {
    const token = localStorage.getItem("token");

    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }
  });

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache,
  };
}

@NgModule({
  exports: [HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}

// const fetchHeader = new ApolloLink((operation, forward) => {
//   return forward(operation).map((response) => {
//     const context = operation.getContext();
//     const {
//       response: { headers },
//     } = context;
//     console.log(context);
//     if (headers) {
//       const authToken = headers.get("Authorization");

//       if (authToken) {
//         localStorage.setItem("token", authToken);
//       }
//     }
//     return response;
//   });
// });

// const uri = "http://localhost:3000/graphql"; // <-- add the URL of the GraphQL server here
// export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
//   return {
//     link: httpLink.create({ uri, withCredentials: true }),
//     cache: new InMemoryCache(),
//   };
// }

// @NgModule({
//   providers: [
//     {
//       provide: APOLLO_OPTIONS,
//       useFactory: createApollo,
//       deps: [HttpLink],
//     },
//   ],
// })
// export class GraphQLModule {}
