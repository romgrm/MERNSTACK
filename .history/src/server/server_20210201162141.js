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
    
    
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`));

if (process.env.NODE_ENV === 'production') {
    app.enable('trust proxy');
    app.use((req, res, next) => {
        if (req.secure) next();
        else res.redirect(`https://'${req.headers.host}${req.url}`);
    });
}