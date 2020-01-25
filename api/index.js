const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const schema = require("./schema/index");
const typeDefs = schema();
const queries = require("./queries");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 9090;

app.use(morgan("dev"));

const resolvers = {
  Query: {
    ...queries
  }
};

const app = express();
app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: "/", cors: true });

app.listen(PORT, () => {
  console.log(`spun up at ${PORT}`);
});
