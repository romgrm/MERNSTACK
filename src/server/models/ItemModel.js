// Importation de mongoose 
const mongoose = require('mongoose');

// Setup pour l'utilisation de schéma par mongoose 
const Schema = mongoose.Schema;

// Création d'un schéma
const ItemSchema = new Schema({
  name: {
       type: String,
       required: true
  },
  date: {
       type: Date,
       default: Date.now
  }
})

// Creation/Exportation du model avec un nom + un schéma 
module.exports = Item = mongoose.model('item', ItemSchema);