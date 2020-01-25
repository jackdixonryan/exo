const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const schema = require("./schema/index");
const typeDefs = schema();
const queries = require("./queries");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 9090;

const resolvers = {
  Query: {
    ...queries
  }
};

const app = express();
app.use(cors());
app.use(morgan("dev"));


const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: "/", cors: true });

app.listen(PORT, () => {
  console.log(`spun up at ${PORT}`);
});
