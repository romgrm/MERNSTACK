// Importation du model Item Model 
const Item = require('../../models/ItemModel');

// GET all items

exports.getItemList = (req, res) => {
    Item.find()
    .then(items => res.json(items))
}