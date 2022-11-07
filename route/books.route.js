const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getTeam,

} = require("../controller/books.controller");

router
    .route("/books")
    .get(getAllBooks)

router
    .route("/team")
    .get(getTeam)

module.exports = router;