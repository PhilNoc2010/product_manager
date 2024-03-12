const express = require("express");
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.port;

require ('./config/mongoose.config')

// make sure these lines are above any app.get or app.post code blocks
app.use(cors())
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const AllMyProductRoutes = require("./routes/product.routes")
AllMyProductRoutes(app)

app.get("/api/test", (req, res) => {
    return res.json({messge:"hello"})
})

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );