// Console Ready Proyect

console.log("====================[RECORDATORIOS WEB]====================");

// Mongo DB

require("./mongodb")

// Express and path
const express = require('express');
const app = express();
const path = require("path");

// Setting
const keys = require("./keys.json");
app.set('port', keys.port);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", require("./routes/routes"));

app.listen(app.get('port'), () => {
    console.log(`[WEB SITE] En línea (${app.get('port')})`)
})