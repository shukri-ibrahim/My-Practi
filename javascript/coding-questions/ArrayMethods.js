// Defining an Array 
let family = ['shukri' , 'barwaqo' ,'ayan', 'faisal']

//Length = family.length
console.log(family.length);

//Access elements
console.log(family[1]);

//print whole Array
console.log(family);

// Array modification
family[family.length-4]
//change faisal to abdihakin
family[family.length-1] ='abdihakin'
console.log(family);

// Add new value at the end of the Array 
family.push('nimo')
console.log(family);


// add new value at the beginning of the Array

family.unshift( 'faizo')
console.log(family);

//Remove a value at the end of the Array
family.pop();
console.log(family);

//Remove a value at the beginning of the Array
family.shift();
console.log(family);

//get index of an Array element
console.log(family.indexOf('barwaqo'))

//print barwaqo
console.log(family[family.indexOf('barwaqo')])

//join Array elements
let name = [ 'shukri', 'ibrahim']
console.log(name.join(' '));

//joining two arrays

let sisters =[ 'ayan', 'barwaqo', 'fatma']
let brothers = [ 'faisal', 'abdihakin', 'abdisahal']
let family1 = sisters.concat(brothers)
console.log(family1);
sisters.splice(1, 'amina')
console.log(sisters);
/*The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
The splice() method returns an array with the deleted items:*/
//splice method

let months = ['Jan', 'March', 'April', 'June'];
months.splice(4, 2, 'May');
console.log(months);
months.splice(1)
console.log(months);

let newmonths =months.slice(0,1)
console.log(months);

// ISArray method 
console.log(Array.isArray(newmonths));

//ArrayIcludes method

console.log(months.includes('Jan'));

