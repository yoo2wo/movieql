import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
	typeDefs: "graphql/shema.graphql",
	resolvers // <- 최근방식  //옛날 방식은 resolvers: resolvers
});

server.start(()=>console.log("Graphql Server Running"));
