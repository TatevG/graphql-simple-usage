const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
} = require('graphql');
const persons = require('./data/persons');
const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString }
    })
});
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        person: {
            type: PersonType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve(_, args) {
                // if (!Object.keys(args).length === 0) {
                    console.log('args', !Object.keys(args).length === 0)
                    for (let i = 0; i < persons.length; i++) {
                        if (persons[i].id == args.id) {
                            return persons[i];
                        }
                    }
                // } else {
                //     console.log('persons', persons);
                //     return persons;
                // }
            }
        }
    }
});
module.exports = new GraphQLSchema({
    query: RootQuery
});