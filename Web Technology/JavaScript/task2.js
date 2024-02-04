//execute all array operations 2 examples
//execute all airthmetic operations

//array operations---->
var cars=["Hyundai","tata","Suzuki","MG astor","Mahindra","XUV","BMW","Rolls-Royce"];
console.log(cars);
for(let i=0;i<cars.length;i++){
console.log(cars[i]);
}

var carconcat=cars.concat(cars);
console.log(carconcat);
var copy=cars.copyWithin(2,0);
console.log(copy);
var filling=cars.fill("Lamborghini");
console.log(filling);

console.log(cars.length);
var popping=cars.pop();
console.log(popping);

var pushing=cars.push("BMW");
console.log(pushing);
console.log(cars);

var shifts=cars.shift();
console.log(shifts);
console.log(cars);

var unshifts=cars.unshift("Rools-Royce");
console.log(unshifts);
console.log(cars);

var to=cars.toString();
console.log(to);

var key=[2,4,6]

console.log(cars.at(0));
var joining=cars.join(key);
console.log(joining);

var newCars=cars.flat();
console.log(newCars);

var sli=cars.slice(0,5);
console.log(sli);

var spli=cars.splice(2,4,"Mahindra","MG Astor","XUV","Audi");
console.log(spli);
console.log(cars);


console.log("--------------------------------------------------------");
console.log("operators");
let x=50;
let y=10;

let c=x+y;
console.log("x+y=",c);

let d=x-y;
console.log("x-y=",d);

let e=x*y;
console.log("x*y=",e);

let f=x**y;
console.log("x**y=",f);

let g=x/y;
console.log("x/y=",g);

let h=x%y;
console.log("x%y",h);

let i=x++;
console.log("x++ is =",i);

let j=x--;
console.log("x-- is =",j);

let k=x==y;
console.log(k);

let l=x!=y;
console.log(l);

let m=x>y;
console.log(m);

let n=x<y;
console.log(n);

let o=x>=y;
console.log(o);

let p=x<=y;
console.log(p);




