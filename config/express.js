const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use((req,res,next) => {
        res.header('Access-Control-Allow-Origin','*')
        res.header(
            'Access-Control-Allow-Header', 
            'Origin, X-Requseted, Content-Type, Accept, Authorization'
            );
            if(req.method==='OPTIONS'){
                res.header('Access-Control-Allow-Methods', 'PUT,POST,PATH,DELETE,GET')
                return res.status(200).json({})
            }
            next()
    })
}