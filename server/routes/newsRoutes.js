const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  fetchArticles,
  fetchArticleGeneralDetails,
} = require("../controllers/newsController.js");

const newsRouter = express.Router();
newsRouter.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

newsRouter.post("/:pageNumber", fetchArticles);
newsRouter.get("/:id", fetchArticleGeneralDetails);
module.exports = newsRouter;
