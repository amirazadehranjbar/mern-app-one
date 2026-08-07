const { noteController } = require("../controllers/notesControllres.js");
const express = require("express");

const notesRoutes = express.Router();

notesRoutes.get("/", noteController.getAllNotesRoutes);

notesRoutes.post("/", noteController.createNotesRoutes);


module.exports = notesRoutes;