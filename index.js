module.exports = function math(operation, firstTerm, secondTerm){
    if(operation === 'add'){
        return Math.round(firstTerm + secondTerm)
    } else if (operation === 'subtract'){
        return Math.round(firstTerm - secondTerm)
    } else {
        throw Error('Unknown operation')
    }
}