import mongoose from 'mongoose'

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
    }
})

export const groupModel = mongoose.model("groups", groupSchema)
