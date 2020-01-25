const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const schema = require("./schema/index");
const typeDefs = schema();
const queries = require("./queries");
const cors = require("cors");

const resolvers = {
  Query: {
    ...queries
  }
};

const app = express();
app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: "/", cors: true });

app.listen(5000, () => {
  console.log(`spun up at localhost:5000`);
});
