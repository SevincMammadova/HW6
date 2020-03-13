function getFactorial(n) {
    if((typeof n !== 'number' || n < 0)) return 'Wrong input!';
    return (n === 1 || n === 0) ? 1: n *getFactorial (n - 1);
}

function makecounter() {
    let count = 0;
    return function() {
        return count++;
    };
}
let counter = makecounter();

