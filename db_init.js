import mongoose from "mongoose";
const conxnURL = "mongodb://localhost:27017/clubsDB"

mongoose.connect(conxnURL, (err, done) => {
    if (err) {
        console.log('conxn error');
    } else {
        console.log('conxn successful')
    }
})