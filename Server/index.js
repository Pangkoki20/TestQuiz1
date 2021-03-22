let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router(); let cors = require('cors');
let app = express();
app.use(cors());
// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router); //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);
let pets = {
    list: [
        { id: 1, type: 'cat', age: 1, weight: 5, price: 2000 },
        { id: 2, type: 'dog', age: 1, weight: 10, price: 3000 }
    ]
}

router.route('/pets')
    .get((req, res) => res.json(pets))
    .post((req, res) => {
        console.log(req.body)
        let newPet = {}
        newPet.id = (pets.list.length) ? pets.list[pets.list.length - 1].id + 1 : 1
        newPet.type = req.body.type
        newPet.ege = req.body.ege
        newPet.price = req.body.price
        pets = { "list": [...pets.list, newPet] }
        res.json(pets)
    })
router.route('/pets/:pet_id')
    .get((req, res) => {
        const pet_id = req.params.pet_id
        const id = pets.list.findIndex(item => +item.id === +pet_id)
        res.json(pets.list[id])
    })
    .put((req, res) => {
        const pet_id = req.params.pet_id
        const id = pets.list.findIndex(item => +item.id === +pet_id)
        pets.list[id].name = req.body.name
        pets.list[id].weight = req.body.weight
        res.json(pets.list[id])
    })
    .delete((req, res) => {
        const pet_id = req.params.pet_id
        console.log('petId: ', pet_id)
        pets.list = pets.list.filter(item => +item.id !== +pet_id)
        res.json(pets)
    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(3001, () => console.log('server is running...'))
