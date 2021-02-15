// Importation d'express avec la fonction Router()
const express = require('express');
const router = express.Router();

// Importation du model Item Model 
const itemController = require('../../controllers/ItemController');

// get all items
router.get('/', itemController.getItemList); 

// get item by id
router.get('/:id', itemController.getItemById);

// create item
router.post('/', itemController.createItem);

// update item
router.put('/:id', itemController.updateItem);

// delete item
router.delete('/:id', itemController.deleteItem)

module.exports = router; 