import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import bodyParser from 'body-parser'
import cors from 'cors'

import { pool } from './db/index'
import typeDefs from './graphql/types/index'
import resolvers from './graphql/resolvers/index'

const app = express()

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

app.use(bodyParser.json())
app.use(cors())

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema, context: { pool } })
)
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(process.env.SERVERPORT, err => {
  err
    ? console.log('Something is wrong! 🔥')
    : console.log('🚀  App running in port: 8000')
})

export default app
