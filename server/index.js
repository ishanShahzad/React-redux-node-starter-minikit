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

app.get("/", (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../client/dist/index.html`));
});

// app.get('/api/v1/', (req, res) => {
//   res.send({ message: 'Welcome, built with NodeJs, Express and MongoDB' });
// });

// app.use('/api/v1/', routes);

app.listen(port, () => {
  console.log("server on 3000");
});
