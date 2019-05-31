import express from "express";
import path from "path";
import open from "open";
import {MongoClient as mongo} from "mongodb";
import compression from "compression";
import dotenv from "dotenv";

import webpack from "webpack";
import config from "../webpack.config.dev";

const port = 8000;
const app = express();
const compiler = webpack(config);

dotenv.config();
app.use(compression());
app.use(express.static(__dirname + "/public"));
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get("/api/schema", async (req, res) => {
    const client = await mongo.connect("mongodb://localhost:27017");
    const db = client.db("form-builder");
    const coll = db.collection(process.env.COLLECTION_NAME);
    const questions = await coll.find({}).toArray();

    res.json({
        success: true,
        schema: questions
    });
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (err) => {
    if (err) throw err;
    open("http://localhost:" + port);
});
