const express = require('express');
const app = express();

const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser');
sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const {
    Teacher,
    Sequelize: {Op}
} = require('./models');
sequelize.query('SET NAMES utf8;');

app.post('/add/data', (req, res) => {
    console.log(req.body)

    Teacher.create({
        name : req.body.data
    })
        .then( result => {
            res.send(result)
        })
        .catch( err => {
            console.log(err)
            throw err;
        })
})

//모든 데이터 조회
/*
app.get('/get/data', (req, res) => {
    Teacher.findAll()
        .then( result => { res.send(result) })
        .catch( err => { throw err })
})
*/

//특정 데이터 조회
/*app.get('/get/data', (req, res) => {
    Teacher.findAll({
        where: { name : 'James' }
    })
        .then( result => { res.send(result) })
        .catch( err => { throw err })
})*/

//여러개의 조건 설정해서 조회
/*app.get('/get/data', (req, res) => {
    Teacher.findAll({
        where: { [Op.or]: [{ id : 1 }, { name : 'Alan' }] }
    })
        .then( result => { res.send(result) })
        .catch( err => { throw err })
})*/
//하나의 데이터 조회
app.get('/get/data', (req, res) => {
    Teacher.findOne({
        where : { id : 2 }
    })
        .then( result => { res.send(result) })
        .catch( err => { throw err })
})

//findOne과 findAll의 차이점은 findAll은 array형태로 데이터를 보내고 findOne은 object 형태로 데이터를 보낸다



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})