const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    const most = new Date();
    const idopont = most.toTimeString().split(' ')[0];

    console.log(`[${idopont}] ${req.method} ${req.url}`);
    next();
});

app.use((req, res, next) => {
    res.setHeader("X-Filmklub", "Sarospatak");
    next();
});

app.use(express.static(path.join(__dirname, "public")));

const filmRouter = require("./routes/filmRoutes.js");
app.use("/api/filmek", filmRouter);

app.use((req, res) => {
    app.status("404").json({
        "hiba" : "nincs ilyen végpont",
        "keresett" : req.url
    })
})

module.exports = app;