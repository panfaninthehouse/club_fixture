import express from 'express'
// import { regiserTeams, randomDraw } from '../controllers/draw.controller.js'

// router.post('/register', regiserTeams)
// router.get('/random', randomDraw)
// router.get('/ranDraw', randomDraw)

import { getGrpTeams, group, initOut, updateTeam } from '../controllers/draw.controller.js'
import { fixtureController, fixtureUpdate } from '../controllers/fixture.controller.js'

const router = express.Router()

router.put('/initial', initOut)
router.get('/initial', group)
router.post('/groupTeams', getGrpTeams)
router.put('/update', updateTeam)
router.get('/fixture/:id', fixtureController)
router.patch('/fix_update/:id', fixtureUpdate)

export default router