// require all dependencies

const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000

// meddlewares
const app = express()
app.use(cors())


app.listen(port,()=>console.log('listening on port', port))