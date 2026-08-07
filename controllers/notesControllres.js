const {noteModel} = require("../models/noteModel");

const getAllNotesRoute = async (req, res) => {
    try {
        const notes = await noteModel.find({})
        return res.status(200).json({message: "success", data: notes})
    } catch (e) {
        console.error(e);
        return res.status(500).json({message: "error"});
    }
}


const createNotesRoute = async (req, res) => {
    try {

        const {title, description} = req.body;

        if (!title || !description) {
            return res.status(400).json({message: "title and description"});
        }

        const newNote = new noteModel({title, description});

        await newNote.save();

        return res.status(201).json({message: "success", data: newNote})

    } catch (e) {

        console.error(e);
        return res.status(500).json({message: "error in createNotes"});
    }
}

const noteUpdateRoute = async (req, res) => {

    try {
        const id = req.params.id;
        const {title, description} = req.body;

        const updatedNote = await noteModel.findOneAndUpdate({_id: id}, {$set: {title, description}}, {
            returnDocument:"after",
            runValidators: true
        });

        return res.status(201).json({message: "note updated successfully", data: updatedNote});

    } catch (e) {
        console.error(e);
        return res.status(500).json({message: "error in updateNotes"});
    }

}


module.exports.noteController = {getAllNotesRoute, createNotesRoute, noteUpdateRoute};