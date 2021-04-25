import "@babel/polyfill";
import { GraphQLServer } from "graphql-yoga";
const { mainCards, animals, categories } = require("./db");

const Query = require("./resolvers/Query");
const Animal = require("./resolvers/Animal");
const Category = require("./resolvers/Category");
const Mutation = require("./resolvers/Mutation");

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Animal,
    Category,
  },
  context: {
    mainCards,
    animals,
    categories,
  },
});

// The `listen` method launches a web server.
server.start({ port: process.env.PORT || 4000 }, () => {
  console.log("The server is up!");
});
