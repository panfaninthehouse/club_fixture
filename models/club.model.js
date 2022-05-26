import mongoose from 'mongoose'

const clubSchema = new mongoose.Schema({
    name: {
        type: String
    },
    group: {
        type: mongoose.Types.ObjectId,
        // ref: "groups",
        default: ""
    }
})

export const clubModel = mongoose.model("clubs", clubSchema)
