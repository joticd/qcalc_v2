const mongoose = require('mongoose');
const fun = require('../config/functions');
const generalInfo = require('./fields/general-info');
const yearCapacity = require('./fields/year-capacity');

const mechanizationExcavator = require('./fields/mechanization-excavator');
const mechanizationLoader = require('./fields/mechanization-loader');
const mechanizationTruck = require('./fields/mechanization-truck');

const waterArea = require('./fields/water-area');
const collector = require('./fields/collector-pump');

const fieldsArray = [generalInfo, yearCapacity, mechanizationExcavator, mechanizationLoader, mechanizationTruck, waterArea, collector];
const fields = {
    name:{
        required:true,
        type: String
    },
    locality:{
        required:false,
        type: String,
        default:""
    },
    projectName:{
        type: String,
        default:""
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    }
};
fun.fillFields(fields, fieldsArray);

const taskSchema = new mongoose.Schema(fields,{
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
