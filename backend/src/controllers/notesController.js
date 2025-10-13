//api endpoints

//get all notes
export function getAllNotes(req, res){
    res.status(200).send("Successfully fetched all notes.");
}

//create a note
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
