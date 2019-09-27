const express = require("express");
import cors from "cors";
import bodyParser from "body-parser";
const path = require("path");

// import database from "./config/database";
// import routes from "./routes";

// require("dotenv");

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.listen(port, () => {
  console.log("server is litening on port 3000");
});
