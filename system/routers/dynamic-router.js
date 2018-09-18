let express = require('express');
let bodyParser = require('body-parser');
let dynamicRouter = express.Router();
let path = require('path');
let notFound = require('./notfound');

let rootRoute = (req, res) => {
  res.send('root');
}

let dynamicRoute = (req, res) => {
  let dynamicRoutersPath = path.join(process.cwd(), './runtime/dynamic-routres', req.params.route);
  try {
    let currRouter = require(dynamicRoutersPath);
    // if(currRouter.subRouter) dynamicRouter.use(currRouter.subRouter);
    currRouter(req, res);
  } catch(e) {
    notFound(req, res);
  }
}

dynamicRouter.use('/:route', dynamicRoute);
dynamicRouter.use('/', rootRoute);

module.exports = dynamicRouter;