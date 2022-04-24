import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/index.mjs";
import algoliasearch from "algoliasearch";
import cron from "node-cron";

dotenv.config();

const client = algoliasearch(
  process.env.ALGOLIA_ID,
  process.env.ALGOLIA_API_KEY
);
const index = client.initIndex("all-products");

try {
  mongoose.connect(process.env.MONGO_CONNECTION);
  const db = mongoose.connection;
  db.on("error", (err) => {
    console.log(err);
  });
  db.once("open", () => console.log("database connected..."));
} catch (error) {
  console.log(error);
}

const app = express();
const port = process.env.PORT || 5000;

cron.schedule("*/5 * * * *", () => {
  mongoose.connect(process.env.MONGO_CONNECTION);
  const db = mongoose.connection;
  db.collection("products")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;
      result.forEach((product) => {
        product.objectID = product._id;
        index.saveObject(product, function (err) {
          if (err) throw err;
        });
      });
    });
  console.log("Products indexed in Algolia");
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", reason.stack || reason);
  // Recommended: send the information to sentry.io
  // or whatever crash reporting service you use
});

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`server is listening on port ${port}...`));
