const products = require('../app/controllers/products');
const auth = require('../app/controllers/auth')
const company = require('../app/controllers/company')

const authMiddleware = require('../app/middleware/auth')

module.exports = (app) => {
    // products authMiddleware,
    app.get('/products',  products.getAll)
    app.post('/products',  products.create)
    app.put('/products/:id', products.update)
    app.delete('/products/:id',  products.remove)

    // auth 
    app.post('/signin', auth.signIn)

    // company
    app.get('/company', company.getAll)
    app.post('/company', company.create)
    app.put('/company/:id', company.update)
    app.delete('/company/:id',company.remove)
}