/*************************** IMPORTATION DES MIDDLEWARES ET DEPENDENCIES **************************/
// Importation d'express.js 
const express = require("express");
// Importation de Mongoose 
const mongoose = require("mongoose");
// Importation de bodyparser 
const bodyParser = require("body-parser");
// Importation des CORS pour pouvoir appeler l'API en front 
var cors = require('cors')
/**************************************************************************************************/

app.use(cors())
/*************************** UTILISATION EXPRESS + FORMAT JSON **************************/
// app sera notre application back qui utilisera expressJs
const app = express();

// app utilisera le bodyparser avec comme format de document reçus/envoyés, du .json
app.use(bodyParser.json());
/****************************************************************************************/


/*************************** CONNECTION A LA BDD **************************/
// Récupération de l'uri de notre bdd 
const db = require('../../config/keys').mongodbURI;

// Connection de notre bdd 
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB error', err))
/**************************************************************************/  


/*************************** GESTION DES ROUTES **************************/
// Importer Route Item 
const item = require('./routes/api/ItemRoute')

// Utilisation de route
app.use('/api/item', item);
/*************************************************************************/


/*************************** GESTION DU PORT **************************/
// Déclaration du port pour le serveur     
const port = process.env.PORT || 5000;

// App à l'écoute de notre port 
app.listen(port, () => console.log(`App listening on port ${port}`));
/***********************************************************************/


/*************************** SETUP ENV PRODUCTION **************************/
// Check si on est en mode production avec des req https 
if (process.env.NODE_ENV === 'production') {
    app.enable('trust proxy');
    app.use((req, res, next) => {
        if (req.secure) next();
        else res.redirect(`https://'${req.headers.host}${req.url}`);
    });
}
/***************************************************************************/