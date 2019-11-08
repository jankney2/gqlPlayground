const express = require("express");
const app = express();
const expressGraphQL = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require("graphql");
let bookId=0
const authors=[
    {
        name:'jk rowling', 
        id:1
    },
    {
        name:'George RR Martin', 
        id:2
    },
    {
        name:'JRR Tolkien', 
        id:3
    },
] 

const books=[
    {
        name:'harry potter and the sorcerer stone', 
        id:++bookId,
        authorId:1
    },
    {
        name:'harry potter and the goblet of fire', 
        id:++bookId,
        authorId:1
    },
    {
        name:'harry potter and the one where dumbledore dies', 
        id:++bookId,
        authorId:1
    },
    {
        name:'harry potter and the one where dumbledore dies', 
        id:++bookId,
        authorId:1
    },
    
]

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "helloWorld",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "hello world"
      }
    })
  })
});

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

app.listen(5000, () => {
  console.log("listening on 5000");
});
