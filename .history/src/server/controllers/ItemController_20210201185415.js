// Importation du model Item Model 
const Item = require('../models/ItemModel');

// GET all items
exports.getItemList = (req, res) => {
    Item.find()
    .then(items => res.json(items))
}

exports.getItemById = (req, res) => {
    Item.findById(req.params.id)
    .then(items => res.json(items))
}


// POST item 
exports.createItem = (req, res) => {
    //Création d'un nouvel Item Model 
    // avec comme donnée la donnée remplie
    // dans le body (sur Postman par exemple)
    const itemToPost = new Item({
        name: req.body.name
    });
    // Sauvegarde de la donnée puis affichage en json
    itemToPost.save()
        .then(item => res.json(item))
}

