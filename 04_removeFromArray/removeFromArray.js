const removeFromArray = function(array,...toRemove) {
    const valueIndexMap = getValueIndexMap(array);
    if (!array) return 
    if (array.length == 0) return array
    for (let item of toRemove){
        let indicies = valueIndexMap[getKey(item)];
        if (indicies)
            for (let index of indicies) array[index] = null;
    }
    for (let i = 0 ; i < array.length ;){
        if (array[i] == null) array.splice(i,1);
        else i++;
    }
    return array;
};

const getValueIndexMap = function(array){
    const map = {};
    for (let i = 0 ; i < array.length ; i++){
        const key = getKey(array[i])
        if (!map[key]) map[key] = [];
        map[key].push(i);
    }
    return map;
}

const getKey =  function (value){
    return value + typeof value;
} 

// Do not edit below this line
module.exports = removeFromArray;
