//Ternary operator.
let age1;
age1=32;
let result= age1 >= 18 ? 'Adult' : 'Minor'; 
console.log(result);

//Guard operator.
let age2=0;
let finalage=age2||18;
console.log(finalage);

//Default parameters.
let age3;
let fage=age3??18;
console.log(fage);