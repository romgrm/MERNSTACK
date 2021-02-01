// Importation d'express avec la fonction Router()
const router = require('express').Router();

// Importation du model Item Model 
const ItemController = require('../../controllers/ItemController');

router.get('/', ItemController.getItemList); 