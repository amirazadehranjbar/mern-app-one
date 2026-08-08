require("dotenv").config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const {connectDB} = require("./config/db");
const rateLimiter = require("./middleware/rateLimiter")

const PORT = process.env.PORT || 5000;

const notesRoutes = require("./routes/notesRoute");


const app = express();

// middleware
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes)

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// first connect to database then application will start
connectDB().then(() => {
    app.listen(PORT, "0.0.0.0", (err) => {
        if (err) {
            console.error(err);
        }
        console.info("Listening on port " + PORT);
    });
})


module.exports = app;
