import { clubModel } from "../models/club.model.js"
import { groupModel } from "../models/group.model.js"


export const regiserTeams = async (name) => {
    try {
        const clubs = await clubModel({ name }).save()
        return clubs
    } catch (error) {
        return error.message
    }
}

const teamArr = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9', 't10']
let groupA;
let groupB;

export const group = async (req, res, next) => {
    try {
        groupA = new groupModel({ name: "poleA" })
        groupB = new groupModel({ name: "poleB" })
        const success1 = await groupA.save()
        const success2 = await groupB.save()
        res.send("done")
    } catch (error) {
        console.log(error)
        res.json('error')
    }
}

export const initOut = async (req, res, next) => {
    try {
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        shuffleArray(teamArr)
        const suffleTeams = teamArr.splice(0, 8)
        const x = suffleTeams.forEach(async (item, index) => {
            let club;
            if (index < 4) {
                club = new clubModel({ name: item, group: groupA._id })
            } else {
                club = new clubModel({ name: item, group: groupB._id })
            }
            await club.save()
        })
        res.send(x)
    } catch (error) {
        console.log(error)
        res.send('something went worng')
    }
}

export const getGrpTeams = async (req, res, next) => {
    try {
        const { id } = req.body
        const teams = await clubModel.find({ group: id })
        res.send(teams)
    } catch (error) {
        res.send('something went wrong', error)
    }
}

export const updateTeam = async (req, res, next) => {
    try {
        const { name, upName } = req.body
        const team = await clubModel.findOneAndUpdate({ name: name }, { $set: { name: upName } })
        console.log(team)
        res.json(team)
    } catch (error) {
        console.log(error)
        res.send('something went wrong')
    }
}


// export const randomDraw = async (req, res, next) => {
//     try {
//         const randomOne = await clubModel.aggregate([{ $sample: { size: 8 } }])

//         res.send(randomOne)

// let gA = []
// let gB = []

// const arr1 = randomOne.forEach((item) => {
//     // return item.name
//     if (gA.length == 0 && gB.length == 0) {
//         gA.push(item.name)
//     }
//     else if (gA.length > gB.length) {
//         gB.push(item.name)
//     } else if (gA.length < gB.length) {
//         gA.push(item.name)
//     } else {
//         gA.push(item.name)
//     }
// })
// console.log(gA, gB)

// res.json({
//     groupA: gA,
//     groupB: gB
// })
//     } catch (error) {
//         res.satus(500).send("Something went wrong")

//     }
// }

// export const randomDraw = async (req, res, next) => {
//     try {
//         let gA = []
//         let gB = []
//         const teams = await clubModel.find()
//         console.log(teams)


        // const arr1 = randomOne.forEach((item) => {
        //     if (gA.length == 0 && gB.length == 0) {
        //         gA.push(item.name)
        //     }
        //     else if (gA.length > gB.length) {
        //         gB.push(item.name)
        //     } else if (gA.length < gB.length) {
        //         gA.push(item.name)
        //     } else {
        //         gA.push(item.name)
        //     }
        // })
        // console.log(gA, gB)

//         res.json({
//             groupA: gA,
//             groupB: gB
//         })
//     } catch (error) {
//         res.satus(500).send("Something went wrong")

//     }
// }
