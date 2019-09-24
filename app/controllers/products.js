const mongoose = require('mongoose');
const Product = mongoose.model('Product');

const getAll = (req, res) => {
    Product.find()
    .exec()
    .then(products => res.send(products))
    .catch(err => res.status(500).send(err))
};

const create = (req, res) => { 
    Product.create(req.body)
    .then( createProduct => res.send(createProduct))
    .catch(err => res.status(500).send(err))
};

const update = (req, res) => {
    Product.findByIdAndUpdate({_id: req.params.id}, req.body)
    .exec()
    .then(product => res.send(product))
    .catch(err => res.status(500).send(err))
};

const remove = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .exec()
    .then(product => res.send(product))
    .catch(err => res.status(500).send(err))
};

module.exports = {
    getAll,
    create,
    update,
    remove
};