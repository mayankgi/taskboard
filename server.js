const express = require('express')
const path = require('path')
const request = require('request');
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')))

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/boards', (reqObj, resObj)=>{
  request('http://localhost:3000/boards', (error, response, body)=> {
    resObj.send(JSON.parse(body));
  })
})

app.post('/createNewBoard', (reqObj, resObj) => {
  const {title} = reqObj.body;
  request.post('http://localhost:3000/boards', {form:{title}}, (err, res, body)=>resObj.send(JSON.parse(body)))
});

app.get('/getColumns', (req, res)=> {
  const {boardId} = req.query;
  request(`http://localhost:3000/boards/${boardId}/columns?_embed=cards`, (error, response, body) => res.send(JSON.parse(body)));
})

app.post('/createNewColumn', (req, res) => {
  const {title, boardId} = req.body;
  request.post(`http://localhost:3000/boards/${boardId}/columns`, {form:{title}}, (err, response, body)=>res.send(JSON.parse(body)));
})

app.post('/createNewCard', (req, res) => {
  const {columnId, description} = req.body;
  request.post(`http://localhost:3000/columns/${columnId}/cards`,{form: {description}}, (err, response, body)=>res.send(JSON.parse(body)));
})

app.put('/moveCard', (req, res) => {
  const {card} = req.body;
  request.put(`http://localhost:3000/cards/${card.id}`,{form: {...card}}, (err, response, body)=>res.send(JSON.parse(body)));
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
