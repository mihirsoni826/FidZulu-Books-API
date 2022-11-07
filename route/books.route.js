const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getTeam,

} = require("../controllers/book.controller");

router
    .route("/")
    .get(getAllBooks)
router
    .route("/team")
    .get(getTeam)

module.exports = router;