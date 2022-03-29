const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const app = express();

//mongo connexion start
mongoose.connect('mongodb+srv://latiifah:96uiKimXRmFfGjr@projectmanager.rprqh.mongodb.net/ProjectManagement?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

//mongo connexion end


app.use(express.json());
app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
});
app.use('/api/auth', userRoutes);

module.exports = app;