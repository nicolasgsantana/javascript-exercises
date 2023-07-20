const removeFromArray = function(array, ...items) {
    const newArray = []
    for(const aItem of array) {
        if(items.includes(aItem)) {
            continue;
        }
        newArray.push(aItem);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
