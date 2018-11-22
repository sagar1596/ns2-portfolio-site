const express = require('express');
const app = express();

const userRoutes = express.Router();

let User = require('../models/User');

//Add user
userRoutes.route('/register').post(function(req, res) {
    let user = new User(req.body);

    user.save()
    .then(user => {
        res.status(200).json({'User': 'User in added successfully'});
    })
    .catch(err => {
        res.status(400).json({'User': 'User addition failed'})
    })
})