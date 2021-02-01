const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const db = require('../../config/keys').mongodbURI;

mongoose.connect(db, { useNewUrlParser: true }, (err, res) =>{

    then(() => console.log('DB connected'))
    .catch((err) => console.log('DB error', err))
});

  const port = process.env.PORT || 3000;

  app.listen(port, () => console.log(`App listening on port ${port}`));

  if (process.env.NODE_ENV === 'production') { 
    app.enable('trust proxy'); 
    app.use((req, res, next) => { 
      if (req.secure) next();
      else res.redirect(`https://'${req.headers.host}${req.url}`);
    });
  }