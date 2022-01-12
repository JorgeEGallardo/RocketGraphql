import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import resolvers from "./resolvers.js";
import typeDefs  from "./typeDefs.js";
import cors from "cors";


const app = express();
app.use(cors());
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

server.applyMiddleware({ app });

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

app.listen({ port: 3000 });
