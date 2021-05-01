// Add your functions here
function map(sourceArray, callback) {
    const newArray = [];

    for (let i=0; i < sourceArray.length; i++) {
        let x = sourceArray[i];
        newArray.push(callback(x));
    };
    return newArray;
}

function reduce(sourceArray, callback, startPoint) {
    let total;
    if (startPoint) {
        total = startPoint;
        for (let i=0; i < sourceArray.length; i++) {
            total = callback(sourceArray[i], total);
        }
        return total
    } else {
        total = sourceArray[0];
        for (let i=1; i < sourceArray.length; i++) {
            total = callback(sourceArray[i], total)
        }
        return total
    }
};