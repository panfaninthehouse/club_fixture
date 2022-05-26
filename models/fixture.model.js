import mongoose from "mongoose";

const fixtureSchema = new mongoose.Schema({
    teamA: {
        type: mongoose.Types.ObjectId,
        ref: "clubs"
    },
    teamB: {
        type: mongoose.Types.ObjectId,
        ref: "clubs"
    },
    time: {
        type: Date,
        // required: true
    },
    score: String,
    events: [{ type: String }],
    status: {
        type: String,
        enum: ["live", "finished", "postponed"],
        default: 'live'
    },
    minutes: String
})

export const fixtureModel = mongoose.model('fixtures', fixtureSchema)