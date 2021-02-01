// Importation du model Item Model 
const Item = require('../models/ItemModel');

// GET all items
exports.getItemList = (req, res) => {
    Item.find()
    .then(items => res.json(items))
}

// POST item 
exports.createItem = (req, res) => {
    const itemToPost = new Item({
        name: req.body.name
    });
    // To learn about the save method: https://mongoosejs.com/docs/api.html#model_Model-save
    itemToPost.save()
        .then(item => res.json(item))
}