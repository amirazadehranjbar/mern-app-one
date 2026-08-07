require("dotenv").config();
const mongoose = require("mongoose");
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const {connectDB} = require("./config/db");

const PORT = process.env.PORT || 5000;

const notesRoutes = require("./routes/notesRoute");

const app = express();

app.use("/api/notes", notesRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


connectDB()

app.listen(PORT ,"0.0.0.0" , (err) => {
    if (err) {
        console.error(err);
    }
    console.info("Listening on port " + PORT);
});

module.exports = app;
