const express = require("express");
const router = express.Router();
const cors = require("cors");
const { fetchArticles } = require("../controllers/newsController.js");

const newsRouter = express.Router();
newsRouter.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

newsRouter.post("/home", fetchArticles);

module.exports = newsRouter;
