const { noteController } = require("../controllers/notesControllres.js");
const express = require("express");

const notesRoutes = express.Router();

notesRoutes.get("/", noteController.getAllNotesRoute);

notesRoutes.post("/", noteController.createNotesRoute);

notesRoutes.put("/:id", noteController.noteUpdateRoute);

module.exports = notesRoutes;