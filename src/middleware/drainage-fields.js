const fun = require('../config/drainageFunctions');
const drainageMiddleware = {};

//WATER AREA 

drainageMiddleware.waterQuantaty = (project) =>{
    project.waterAreaData.forEach(element=>{
        element.waterQuantaty = fun.waterQuantaty(element);
    });
}

drainageMiddleware.returnQuantatyTotal = ({waterAreaData, counterWaterArea}) =>{
    for(let i = 0; i < counterWaterArea; i++){
        if(waterAreaData[i].customInflow !== null){
            let _index = waterAreaData[i].customInflow;
            waterAreaData[i].inflow = waterAreaData[i].inflow + waterAreaData[_index].waterQuantaty;
        };
        waterAreaData[i].waterQuantatyTotal = fun.waterQuantatyTotal(waterAreaData[i].waterQuantaty, waterAreaData[i].inflow);
    } ;  
}

drainageMiddleware.drainage = ({waterAreaData}) =>{   
    waterAreaData.forEach( element => {
        element.first = fun.firstFunChannel(element);
        element.second = fun.secondFunChannel(element);        
        element.third = fun.thirdFunChannel(element);

        element.upper = fun.multipleTwoNum(element.first, element.height);
        element.lower = fun.multipleTwoNum(element.second, element.height);
        element.surface = fun.multipleTwoNum(element.third, Math.pow(element.height, 2));

        element.scope = fun.scope(element);
        element.radius = fun.radius(element);
        element.bazin = fun.bazin(element);
        element.velocity = fun.velocity(element);
        element.potency = fun.multipleTwoNum(element.velocity, element.surface);
        element.safety = fun.safety(element);

    });
    
}

module.exports = drainageMiddleware;
