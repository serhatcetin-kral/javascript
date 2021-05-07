// //function & object


// // leap years

// function hi(){

// console.log("hi welcome to course");

// }



// // hi();


// // function sum(){

// // return 5+10;


// // }

// // console.log(sum());


// // function sumNum(num1,num2){
                 
// //   console.log(num1+num2);               
                 
// //      }
     
     
// //      sumNum(5,8);




// // method  function



// // // console.log("hi welcome to our course");

// // // function text(){


// // // console.log("hi welcome to our course");



// // // }



// // // text();



// // function textSum(){

// // console.log(3+5);




// // }



// // textSum();





// // function print(name,surname,age){

// //    console.log("name:"+name+" "+" surname: "+surname+" "+age);


// // }




// // print("murat","kaan",20);
// // print("ali can","yildiz",35);

// // print("ayse","asli",17);




// // function printName(name,surname,age){


// // //      console.log(`name: ${name} surname: ${surname} age:${age}`);



// // // }

// // // printName("murat","kilic",55);


// // function sum(num1,num2){

// // //console.log(num1+num2);
// // return num1+num2;

// // }



// // //sum(10,20);

// // console.log(10+sum(50,100));



// //  123 321 alican     nacila          alican   a l i c a n   n a c i l a





// // var s=prompt("please enter you name");

// // function reverseAll(str){


// //       console.log(str.split("").reverse().join(""));

// // }


// // reverseAll(s);  // tahtes  3,2,1  321



// function reverseNumber(n){

          
//                       n=n+"";       // n=""+n
  
//   console.log(n.split("").reverse().join(""));


// }


// reverseNumber(2345);



// // function total(num1,num3,num2){

// // console.log(num1+num3);
// //   return num1+num2;  // 10+20


// // }

// //  console.log(total(10,20));  //



// // function total(num1,num3,num2){
  
// //   console.log(num1+num3);
// //     return num1+num2;
// // }
// // console.log(total(10,20));


// // function total(num1=5,num2=10,num3=20){

// // console.log(num1+num2);
// //   return num1+num2+num3;

// // }

// // console.log(total());


// // function totalNumber(num1=5,num2=10,num3=20){

// // console.log(num1+num2);
// //   return num1+num2+num3;


// // }


// // // console.log(totalNumber(100,200,300));


// // function totalNumber(num1=5,num2=10,num3=30){

// // console.log(num1+num2);
// //   return num1+num2+num3;


// //  }




// // console.log(totalNumber(30,20));   //30,20 num3=20



// // var sumNum=function(num1,num2){

// // console.log(num1*num2);


// // }

// // sumNum(10,20);

// // // var let const   int sumNum




// ///leap years year(2000)   divisible 4   divisble 100 100/100  400


// //4 leapp leap year


// function checkLeapYear(year) {
//     if ((year % 4 ==0 ) && ( year % 100 != 0) || (year % 400==0  )) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }
// const year = prompt('Enter a year:');
// checkLeapYear(year);




function leapYear(year){

if(year%4==0){

  if(year%100==0){
  
    if(year%400==0){
    
      return ("leap year")
    }
    
    else{
    
    return ("not leap year");
    
    }
    
   
  }
else{
 return ("leap year");


}  
  
}
else {

return ("not leap year");   // 500 /100 remaining =0  /400  100

}  
  

}

console.log(leapYear(120));   //120  /4 ramening =0 /100 reamining=20




























