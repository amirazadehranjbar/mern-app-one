const { getAllNotesRoutes } = require("../controllers/notesControllres.js");
const express = require("express");

const notesRoutes = express.Router();

notesRoutes.get("/", getAllNotesRoutes)


module.exports = notesRoutes;