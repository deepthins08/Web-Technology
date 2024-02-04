
var city;
var state;

function location10(city,state){
    console.log("running location function");
   
    this.city=city;
    this.state=state;
}

location10("banglore","karnataka");
console.log("city is",city);
console.log("state is",state);

var array=[1,5,3,7,2,9,4];
console.log(array);

for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

array[1]=10;
console.log(array);
var index=array.push(12);
console.log("value inserted at the index ",index)
console.log(array);

var del=array.pop(12);
console.log(array);
console.log("deleted element is ",del);

array.unshift(50);
console.log(array);  //it will add the element to the starting index in array

array.shift(50);
console.log(array); //it will delete the element from statring index in array

var array1=[50,60,70,80,90,20,10,100];
console.log(array1);

var newarray=array1.slice(2,6);
console.log(newarray);

var delete1=newarray.pop();
console.log("deleted array element",delete1);
console.log(newarray);
console.log(newarray.shift());
console.log(newarray);


var numbers=[2,3,5,8,44,91,20,39,45];
console.log(numbers);
console.log(numbers.splice(0,4,9,5,30,7));
console.log("after splicing",numbers);


function airthmetic(a,b){
    var sum=a+b;
    return sum;
}

var sumOfNumbers=airthmetic(1,12);
console.log(sumOfNumbers);

//execute all array operations 2 examples
//execute all airthmetic operations

