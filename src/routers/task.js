const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');

const projectMiddleware = require('../middleware/project-fields');
const mechanizationMiddleware = require('../middleware/mechanization-fields');
const drainageMiddleware = require('../middleware/drainage-fields');
const fun = require('../config/functions');
const router = new express.Router();

const nameOfProject = projectMiddleware.nameOfProject;
const generalInfoCalc = projectMiddleware.generalInfoCalc; 


//PROECT
router.post('/projects', [auth, nameOfProject], async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    });

    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});

//PROECT END

//GENERAL INFO
router.patch('/projects/general-info/:projectName', [auth, generalInfoCalc], async (req, res) => {
    const updates = Object.keys(req.body);
    
    try {
        const project = await Task.findOne({"owner": req.user._id, projectName: req.params.projectName});

        updates.forEach((update)=>{
            project[update] = req.body[update];
        });
        
        await project.save();
        res.send(project);
        
    } catch (e) {
        res.status(400).send(e);
    }
});
//GENERAL INFO END

//TIME
router.patch('/projects/time/:projectName', auth, async (req, res) => {
    const updates = Object.keys(req.body);

    try {
        const project = await Task.findOne({"owner": req.user._id, projectName: req.params.projectName});

        updates.forEach((update)=>{
            project[update] = req.body[update];
        });
        
        await project.save();
        res.send(project);
        
    } catch (e) {
        res.status(400).send(e);
    }
});
//TIME END




//WATER AREA
router.patch('/projects/water-area/:projectName', auth, async (req, res) => {     
    try {
        const project = await Task.findOne({"owner": req.user._id, projectName: req.params.projectName});        
        project.counterWaterArea = req.body.counterWaterArea;
        project.waterAreaData = req.body.waterAreaData;
        drainageMiddleware.waterQuantaty(project);
        drainageMiddleware.returnQuantatyTotal(project);
        drainageMiddleware.drainage(project);        
        await project.save();
        res.send(project);        
    } catch (e) {
        res.status(400).send(e);
    }
});
//WATER AREA END


module.exports = router;
