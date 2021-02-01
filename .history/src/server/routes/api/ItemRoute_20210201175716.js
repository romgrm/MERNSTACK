// Importation d'express avec la fonction Router()
const express = require('express');
const router = express.Router();

// Importation du model Item Model 
const ItemController = require('../../controllers/ItemController');

router.get('/', ItemController.getItemList); 