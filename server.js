import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'
import config from './config/config'

const settings = {
  'editor.theme': 'dark',
  'editor.fontSize': 18,
  'editor.cursorShape': 'line',
};

const server = new ApolloServer({
  playground: { settings },
  typeDefs,
  resolvers
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port: config.port }, () =>
  console.log(`Server ready at http://localhost:${config.port + server.graphqlPath}`),
);