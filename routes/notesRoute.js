const { noteController } = require("../controllers/notesControllres.js");
const express = require("express");

const notesRoutes = express.Router();

notesRoutes.get("/", noteController.getAllNotesRoute);

notesRoutes.get("/:id", noteController.getNoteById);

notesRoutes.post("/", noteController.createNotesRoute);

notesRoutes.put("/:id", noteController.noteUpdateRoute);

notesRoutes.delete("/:id", noteController.deleteNotesRoute);

module.exports = notesRoutes;