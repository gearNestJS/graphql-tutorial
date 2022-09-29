const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const server = express();
const PORT = 3005;

server.use('/graphql', graphqlHTTP({ graphiql: true, }));

server.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Example app listening on port ${PORT}`)
})