const express = require("express");
const records = require("../controllers/records");

const router = express.Router();

router.get("/record", records.getAll);
router.post("/record", records.create);

module.exports = router;
