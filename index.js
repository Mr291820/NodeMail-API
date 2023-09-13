const express = require("express");

const dotenv = require("dotenv");
const routes = require("./routes/userRouts");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

dotenv.config();

// Define port
port = process.env.PORT || 4000;


// Middlewares
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", routes);


// Start nodejs server
app.listen(port, () => {
    console.log("Server is up and listening on port : " + port);

})

