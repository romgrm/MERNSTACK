// Importation du model Item Model 
const Item = require('../models/ItemModel');

/************** GET ALL ITEM  ***************/
exports.getItemList = (req, res) => {
    Item.find()
    .then(items => res.json(items))
}

/************** GET ITEM BY ID ***************/
exports.getItemById = (req, res) => {
    Item.findById(req.params.id)
    .then(items => res.json(items))
}


/************** CREATE ITEM ***************/
exports.createItem = (req, res) => {
    //Création d'un nouvel Item Model avec comme donnée la donnée remplie dans le body (sur Postman par exemple)
    
    const itemToPost = new Item({
        name: req.body.name
    });
   
    // Sauvegarde de la donnée puis affichage en json
    itemToPost.save()
        .then(item => res.json(item))
}

/************** UPDATE ITEM ***************/
exports.updateItem = (req, res) => {
    Item.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name || "Untitled Task"
        }, 
        {
            new: true
        })
    .then(() => res.json({ success: true }))
    // return 404 if not found
    .catch(err => res.status(404).json({ success: false })
    )
}

/************** DELETE ITEM ***************/

