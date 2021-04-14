//Bring in the express server and create application

let express = require ('express');
let app = express();

//Use the express Router object, we need to be able to 'route' to things
let router = express.Router();

//Create GET to return a list of all tarot cards
router.get('/', function (req, res, next) {
    //response object, send out the text 'apple'
    res.send("Apple");
});

//Configure router so all routes are prefixed with /api/v1
app.use('/api/', router);

//Create server to listen on port 5000
var server = app.listen(5000, function () {
    console.log('Node server is running on http://localhost:5000..');
});