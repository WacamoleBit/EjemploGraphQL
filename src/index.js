import { createYoga } from 'graphql-yoga'
import { createServer } from 'http'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers } from './graphql/resolvers'
import { typeDefs } from './graphql/typeDefs'


const schema = makeExecutableSchema ({
    resolvers,
    typeDefs
})

const yoga = createYoga({ 
    schema,
    graphqlEndpoint: '/'
});

const server = createServer(yoga)

server.listen(3000, () => {
    console.log("Server is running")
})