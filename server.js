import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'
import mocks from './graphql/mocks'
import config from './config/config'

const apollo = new ApolloServer({ typeDefs,mocks})
const app = express()
apollo.applyMiddleware({ app })

app.listen({ port: config.port }, () =>
  console.log(`🚀 Server ready at http://localhost:${config.port + apollo.graphqlPath}`)
)