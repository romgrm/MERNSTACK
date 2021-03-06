// Importation d'express avec la fonction Router()
const express = require('express');
const router = express.Router();

// Importation du model Item Model 
const itemController = require('../../controllers/ItemController');

router.get('/', itemController.getItemList); 

router.get('/:id', itemController.getItemById);

router.post('/', itemController.createItem);

router.put('/:id', itemController.updateItem);

router.delete('/:id', itemController.deleteItem)

module.exports = router; 