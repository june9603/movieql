import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
}); // 환경 설정

server.start(() => console.log("Graphql Server Running"));