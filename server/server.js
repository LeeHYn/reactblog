const express = require('express');
const app = express();
const router = require('./route');
const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser');
sequelize.sync();



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);



/*app.post('/add/data', (req, res) => {
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
})*/

//모든 데이터 조회
/*app.get('/get/data', (req, res) => {
    Teacher.findAll()
        .then( result => { res.send(result) })
        .catch( err => { throw err })
})*/

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
/*app.get('/get/data', (req, res) => {
    Teacher.findOne({
        where : { id : 2 }
    })
        .then( result => { res.send(result) })
        .catch( err => { throw err })
})*/

//findOne과 findAll의 차이점은 findAll은 array형태로 데이터를 보내고 findOne은 object 형태로 데이터를 보낸다


/*app.post('/modify/data', (req, res) => {
    Teacher.update({ name : req.body.modify.name }, {
        where : { id : req.body.modify.id }
    })
        .then( result => { res.send(result) })
        .catch( err => { throw err })
})*/

//여러개의 값을 업데이트할때 사용
/*app.post('/modify/data', (req, res) => {
    Teacher.update({ name : 'Same_name' }, {
        where : { [Op.or]: [{ id : 1 }, { name : 'Alan' }]}
    })
        .then( result => { res.send(result) })
        .catch( err => { throw err })
})*/

//데이터 삭제
/*app.post('/delete/data', (req, res) => {
    Teacher.destroy({
        where : { id : req.body.delete.id }
    })
        .then( res.sendStatus(200) )
        .catch( err => { throw err })
})*/


const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})