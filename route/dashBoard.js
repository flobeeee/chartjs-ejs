const express = require("express");
const dashBoardRouter = express.Router();

// http://localhost:3000/dashBoard
dashBoardRouter.get('/', (req, res) => {
    try {
        res.render('dashBoard', {
            title: '대시보드'
        })
    } catch (e) {
        console.log(e)
    }
})

module.exports = {
    dashBoardRouter
}
