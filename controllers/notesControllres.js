const {noteModel} = require("../models/noteModel");

const getAllNotesRoutes = async (req, res) => {
    try {
        const notes = await noteModel.find({})
        return res.status(200).json({message: "success", data: notes})
    } catch (e) {
        console.error(e);
        return res.status(500).json({message: "error"});
    }
}


const createNotesRoutes = async (req, res) => {
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

const noteUpdate = async (req, res) => {

    const id = req.params.id;
    const {title, description} = req.body;

    const updatedNote = await noteModel.update({title, description}, {new: true})

}


module.exports.noteController = {getAllNotesRoutes, createNotesRoutes};