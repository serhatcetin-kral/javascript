// /// array
 


// let person=["mustafa","doctor",1800,"married","new york"];
// console.log(typeof(person));

// console.log(person);

// console.log(typeof(person[1]));


// console.log(typeof(person[2]));

// person[1]="john";

// console.log(person);

// person[0]="bush";


// person[4]="california";
// console.log(person);


// console.log(person.length);

// person[7]="it manager";

// console.log(person);
// console.log(person.length);

// console.log(person[0].length);


// person[5]=1800;
// person[6]="new york city";

// console.log(person);

///     push,pop shift unshift, concat

let fruit=["orange","pineapple","melon","civi","apple","watermelon"];

console.log(fruit);



//   for add new items at the end of array use pus()   fruit.push("grapes)
fruit.push("grapes");

console.log(fruit);

fruit.push("banana");
console.log(fruit);

// unshift  for add new items at the begining of array use unshift code fruit.unshift("patotoes)


fruit.unshift("patotoes");

console.log(fruit);

fruit.unshift("tomotes");
console.log(fruit);

//pop()  use for delete last item of arrary


fruit.pop();
console.log(fruit);

fruit.pop();
console.log(fruit);

// shift  use for delete first item of array



fruit.shift();
console.log(fruit);

fruit.shift();
console.log(fruit);


//concat use for add in the another array 


let food=["burger","meat","beef","kfc"];

let fruitFood=fruit.concat(food);

console.log(fruitFood);



//   Array.isArray use for array is array or not true/false
console.log(Array.isArray(fruit));


//indexOf use for given items index no 


console.log(fruit.indexOf("pineapple"));

console.log(fruit.indexOf("civi"));


// splice 



console.log(fruitFood);


fruitFood.splice(1,2);

console.log(fruitFood);

fruitFood.splice(0,3);
console.log(fruitFood);

fruitFood.splice(1,0,"eggplanets","groundnut","wallnut");
console.log(fruitFood);

fruitFood.splice(1,2,"pizza","steer","beef");
console.log(fruitFood);
















































