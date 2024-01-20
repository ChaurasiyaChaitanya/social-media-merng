const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const { MONGODB_URL } = require("./config.js");
const Post = require("./models/Post.js");

const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
  }
  type Query {
    getPosts: [Post]
  }
`;

const resolvers = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (e) {
        throw new Error(e);
      }
    },
  },
};

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
