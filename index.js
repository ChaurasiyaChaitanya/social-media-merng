const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const { MONGODB_URL } = require("./config.js");
const typeDefs = require("./graphql/typeDefs.js");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected!");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
