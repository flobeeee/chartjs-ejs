const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs'); // ejs 설정

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const {dashBoardRouter} = require('./route/dashBoard');
app.use('/dashBoard', dashBoardRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})