// import { GraphQLServer } from "graphql-yoga";
// import resolvers from "./graphql/resolvers";

// const server = new GraphQLServer({
// 	typeDefs: "graphql/shema.graphql",
// 	resolvers // <- 최근방식  //옛날 방식은 resolvers: resolvers
// });

// server.start(()=>console.log("Graphql Server Running"));
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: `type Movie {
    id: Int!
    title: String!
    rating: Float
    description_intro: String
    language: String
    medium_cover_image: String
    genres: [String]
  }

  type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    suggestions(id: Int!): [Movie]!
  }
  `,
  resolvers
});

server.start(() => console.log("Graphql Server Running"));
