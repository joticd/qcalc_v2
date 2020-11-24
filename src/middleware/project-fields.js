const fun = require('../config/functions');
const projectMiddleware = {};

projectMiddleware.nameOfProject = (req, res, next) => {
    req.body.projectName = fun.nameOfProject(req.body.name, req.body.locality);
    next();
}

projectMiddleware.generalInfoCalc = (req, res, next) => {
    req.body.massWaste = fun.totalWaste(req.body.mass, req.body.massDeposit);
    req.body.yearTotal = fun.quarryTime(req.body.mass, req.body.capacity);
    next();
}

module.exports = projectMiddleware;
