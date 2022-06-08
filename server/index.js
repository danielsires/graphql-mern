const express = require('express')
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 8000
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema.js')
const connectDB = require('./config/connection')
const app = express()

// Connect to database
connectDB()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
})
)

app.listen(port, console.log(`Server is running on port ${port}...`))