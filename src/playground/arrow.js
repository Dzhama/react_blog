const multiplier = {
    number: [2,4,6],
    multiplyBy: 2,
    multiply: function (arr) {
        return this.number.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
console.log(multiplier.number);