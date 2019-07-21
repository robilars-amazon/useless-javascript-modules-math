
module.exports = {
    add: (firstTerm, secondTerm) => firstTerm + secondTerm,
    subtract: (firstTerm, secondTerm) => firstTerm - secondTerm,
    multiply: (firstTerm, secondTerm) => firstTerm * secondTerm,
    divide: (firstTerm, secondTerm) => firstTerm / secondTerm,
    pow: (firstTerm, secondTerm) => Math.pow(firstTerm, secondTerm),
    root: (firstTerm, secondTerm) => Math.pow(firstTerm, 1 / secondTerm)
}