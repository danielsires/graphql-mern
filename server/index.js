const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 8000
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema.js')
const connectDB = require('./config/connection')

// Connect to database
connectDB()

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
})
)

app.listen(port, console.log(`Server is running on port ${port}...`))