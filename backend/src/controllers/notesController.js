import Note from "../models/Note.js";

//api endpoints

//get all notes
export async function getAllNotes(req, res){
    try{
        const notes = await Note.find()
        res.status(200).json(notes);
    }catch(error){
        console.error("Error in getAllNotes");
        res.status(500).json({message: "Internal Server Error"})
    }
}

//create a note
export async function createNote(req, res){
    try{
        const {title, content} = req.body;
        const newNote = new Note(title, content);

        await newNote.save();
    }catch(error){
        console.error("Error in createNote");
        res.status(500).json({message: "Internal Server Error"})
    }
}

export function createNote(req, res){
    res.status(201).json({message: "Successfully created a note."});
}

//update a note
export function updateNote(req, res){
    res.status(200).json({message: "Successfully updated a note."});
}

//delete a note
export function deleteNote(req, res){
    res.status(200).json({message: "Successfully deleted a note."})
}
