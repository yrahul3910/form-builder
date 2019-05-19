import express from "express";
import path from "path";
import open from "open";
import compression from "compression";

import webpack from "webpack";
import config from "../webpack.config.dev";

const port = 8000;
const app = express();
const compiler = webpack(config);

app.use(compression());
app.use(express.static(__dirname + "/public"));
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get("/api/schema", (req, res) => {
    res.json({
        success: true,
        schema: [
            {
                type: "text",
                prompt: "What is your name?"
            }
        ]
    });
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (err) => {
    if (err) throw err;
    open("http://localhost:" + port);
});
