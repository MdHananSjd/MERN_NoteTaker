import mongoose from "mongoose"

//1: Create a Schema
//2: Create a model based on the schema

const noteSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    },
    {timestamps: true} //MONGODB automatically gives you the createdAt and updatedAt details
);

const Note = mongoose.model("note", noteSchema);

export default Note;
