import { Schema, model } from "mongoose"


const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true
    },
})

export default model("Movies", movieSchema)