module.exports = function math(operation, firstTerm, secondTerm){
    if(operation === 'add'){
        return firstTerm + secondTerm
    } else if (operation === 'subtract'){
        return firstTerm - secondTerm
    } else if (operation === 'multiply'){
        return firstTerm * secondTerm
    } else if (operation === 'divide'){
        return firstTerm / secondTerm
    } else {
        throw Error('Unknown operation')
    }
}