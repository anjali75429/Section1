//for loop
for (let i = 0; i < 19; i++) {
    console.log(i);
}
//while loop
console.log('while loop');
let a = 10;
while (a < 19) {
    console.log(a);
    a++;
}

// Do while loop
let b = 10;
console.log('do while loop');

do{
    console.log(b);
    b++;
    

}
while(b>12);
//write a program to print all numbers divisible by 7 in range of 120 - 270;
console.log('numbers divisible by 7');
for(let i=120; i<=270; i++){
    if(i%7 === 0){
        console.log(i);
    }
}

//WAP to check if number is prime 
let num = 7;

let isprime = true;
for(let i=2; i<num; i++){
    if(num%i === 0){
        console.log('not prime');
        isprime = false;
        break;
    }
}
if(isprime) console.log('prime')