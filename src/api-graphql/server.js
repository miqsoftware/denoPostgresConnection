import { Application, Router} from "./deps.js";
import { applyGraphQL, gql, GQLError } from './deps.js';
import { PORT } from './config.ts';
const app = new Application();

const typeDefs = gql`
    type Mercadoria{
        id: ID
        name: String
    }

    type Query{
        mercadorias: [Mercadoria]
    }
`;

const resolvers = {
    Query:{
        
    }
};

const GraphQLService = await applyGraphQL({
    path: '/graphql',
    typeDefs,
    resolvers
})

app.use(GraphQLService.routes(),
        GraphQLService.allowedMethods());
console.log('Server running int port ' + PORT);
await app.listen({ port: PORT })