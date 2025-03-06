import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

app.get("/", async(req, res) => {
    try {
        res.render("index.ejs");
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`App listening on https://localhost:${port}`);
})