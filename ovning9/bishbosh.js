


console.log('hej');

let name = 'Nisse';

console.log(name);

function hej(){
    console.log('hej');
}

function hej2(){
    console.log('hej2');
}

function calc(num1, num2){
    const sum =  num1 + num2;
    console.log(sum);
    return sum;
}

hej();

hej2();

let sum = calc(3, 5);
console.log(sum);

const calc3 = (num1 = 0, num2 = 0) => num1 + num2;

console.log(calc3(3, 4));