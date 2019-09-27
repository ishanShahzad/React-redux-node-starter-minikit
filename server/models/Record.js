const mongoose = require("mongoose");

export const schema = {
  title: {
    type: String
  },
  content: {
    type: String
  }
};

const RecordsSchema = new mongoose.Schema(schema);
module.exports = mongoose.model("Record", RecordsSchema);
