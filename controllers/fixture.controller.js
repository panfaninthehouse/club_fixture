import { fixtureModel } from "../models/fixture.model.js"
import { clubModel } from "../models/club.model.js"

export const fixtureController = async (req, res, next) => {
    try {
        const { id } = req.params
        const teams = await clubModel.find({ group: id })
        const allGames = []
        for (let i = 0; i < teams.length; i++) {
            for (let j = i + 1; j < teams.length; j++) {
                const game = `${teams[i].name} vs ${teams[j].name}`
                const createFixture = new fixtureModel({
                    teamA: teams[i]._id,
                    teamB: teams[j]._id
                })
                await createFixture.save()
                allGames.push(game)
            }
        }
        res.send(allGames)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

export const fixtureUpdate = async (req, res, next) => {
    try {
        const { id } = req.params
        const { teamA, teamB, time, score, events, status, minutes } = req.body
        let fixture = await fixtureModel.findOne({ _id: id })
        fixture.time = new Date(time)
        console.log(fixture.time)
        fixture.score = score
        fixture.events.push(events)
        fixture.status = status
        fixture.minutes = minutes

        await fixture.save()

        res.send('done')
    } catch (error) {
        res.send(error)
    }
}