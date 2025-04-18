function addNums(a, b) {
    c = a+b;

    console.log(c);

}

addNums(14, 22)

//console.log(c);
const getAvg = function(m1, m2, m3){
    let avg = (m1+m2+m3)/3;
    return avg;
}
const result = getAvg(10, 20, 30);
console.log(result);
const Factorial=(n)=>{
    let F=1;
    for(let i=2; i<=n; i++){
        f*=i;
    }
    return F;

}
const fact=Factorial(5);
console.log(fact);