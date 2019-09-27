const mongoos = require("mongoose");
const config = require("./config");
mongoose.Promise = global.Promise;

const {
  db: { uri }
} = config;

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

mongoose.connect(uri, { useNewUrlParser: true });

const database = mongoose.connection;

module.exports = database;
