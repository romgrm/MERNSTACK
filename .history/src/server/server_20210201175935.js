// Importation d'express.js 
const express = require("express");
// Importation de Mongoose 
const mongoose = require("mongoose");
// Importation de bodyparser 
const bodyParser = require("body-parser");

// app sera notre application back qui utilisera expressJs
const app = express();

// app utilisera le bodyparser avec comme format de document reçus/envoyés, du .json
app.use(bodyParser.json());

// Récupération de l'uri de notre bdd 
const db = require('../../config/keys').mongodbURI;

// Connection de notre bdd 
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB error', err))
    


// Define root Route
app.get('/', (req, res) => {
    res.send('Hello')
})

// Importer Route Item 
const item = require('./routes/api/ItemRoute')


// Utilisation de route
app.use('/api/item', item);


// Déclaration du port pour le serveur     
const port = process.env.PORT || 3000;

// App à l'écoute de notre port 
app.listen(port, () => console.log(`App listening on port ${port}`));

// Check si on est en mode production avec des req https 
if (process.env.NODE_ENV === 'production') {
    app.enable('trust proxy');
    app.use((req, res, next) => {
        if (req.secure) next();
        else res.redirect(`https://'${req.headers.host}${req.url}`);
    });
}