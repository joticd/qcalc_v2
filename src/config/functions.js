const fillFields = (fields, fieldsArray) => {
    fieldsArray.forEach(tasks => {
        for(let i in tasks){
            fields[i] = tasks[i];
        }
    });
}

const nameOfProject = (name, locality)=>{
    const _name = name.replace(" ", "");
    const _locality = locality.replace(" ", "");
    let _projecName = _name+_locality;
    return _projecName.toLowerCase();
}

const totalWaste = (total, deposit) => {
    if(total && deposit){
        return total-deposit;
    }  
};

const quarryTime = (mass, capacity) =>{
    return mass / capacity;
}


module.exports = {
    fillFields,
    nameOfProject,
    totalWaste,
    quarryTime
}
