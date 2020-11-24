const waterQuantaty = ({intensity, alpha, area}) => intensity * alpha * area * 0.0001;

const waterQuantatyTotal = (waterQuantaty, infolw) => waterQuantaty + infolw;

const ctan = (degrees) =>{
    let _tan = Math.tan(degrees * Math.PI / 180);
    let _ctan = 1/_tan;
    return _ctan;
}

const firstFunChannel = ({angle}) =>{
    let _ctan = ctan(angle);
    let _ctgSq = 1 + Math.pow(_ctan, 2);
    let _ctgSqR = Math.pow(_ctgSq, 0.5);
    let _val = 2 * _ctgSqR;
    return _val.toFixed(2);
}

const secondFunChannel = ({angle}) =>{
    let _ctan = ctan(angle);
    let _ctgSq = 1 + Math.pow(_ctan, 2);
    let _ctgSqR = 2 * Math.pow(_ctgSq, 0.5);
    let _secPart = 2 *_ctan;
    let _val = _ctgSqR - _secPart;
    return _val.toFixed(2);
}

const thirdFunChannel = ({angle}) =>{
    let _ctan = ctan(angle);
    let _ctgSq = 1 + Math.pow(_ctan, 2);
    let _ctgSqR = 2 * Math.pow(_ctgSq, 0.5);
    let _secPart = _ctan;
    let _val = _ctgSqR - _secPart;
    return _val.toFixed(2);
}

const multipleTwoNum = (f, s) =>{
    let _val = f * s;
    return _val.toFixed(2);
}

const scope = ({height, lower}) =>{
    let _val = 2 * height * Math.pow(2, 0.5) + lower;
    return _val.toFixed(2);
}

const radius = ({surface, scope}) =>{
    let _val = surface / scope;
    return _val.toFixed(2);
}

const bazin = ({radius, gama}) =>{  
    let _val = 87 * Math.pow(radius, 0.5)/(gama + Math.pow(radius, 0.5));
    return _val.toFixed(2);
}

const velocity = ({radius, bazin, decline}) =>{
    let _val = bazin * Math.pow(radius*decline, 0.5);
    return _val.toFixed(2);
}

const safety = ({potency, waterQuantatyTotal}) =>{
    let _val = potency/waterQuantatyTotal;
    return _val.toFixed(2);
}

  

module.exports = {
    waterQuantaty,
    waterQuantatyTotal,
    ctan,
    firstFunChannel,
    secondFunChannel,
    thirdFunChannel,
    multipleTwoNum,
    scope,
    radius,
    bazin,
    velocity,
    safety
   
}
