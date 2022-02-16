var firstName = 'shukri'
var secondName = 'ibrahim'
var fullname = firstName+" "+secondName
console.log(fullname)

//character access
var myname = "shukri ibrahim"
 var charh= myname.charAt(1)
console.log(charh)
var fullname = 'shukri ibrahim'
var charb = fullname.charAt(8)
console.log(charb)
var myname ='shukri ibrahim'
var lastindex = myname.length-1
console.log(myname.charAt(myname.length-1))

// index of sub str takes two arguments.starting index and number of characters to slice 
/// index of sub string takes two arguments starting index and the stopping index but the stopping index will not be returned.

let name = 'shukri mohamed'
console.log(name.substr(2, 3));
console.log(name.substring(2,4))
console.log(name.substr(7, 4))
console.log(name.substring(7,10))


var myname="shukri"
console.log(myname.toUpperCase())

var myname="shukri"
console.log(myname.toLowerCase())
var myname="shukri"
console.log(myname.toLocaleUpperCase())
console.log(myname.toLowerCase())
var myname="shukri"
console.log(myname.split(""))
//split
let message="30weeks of code"
console.log(message.split(" "))

let myName='shukri,ibrahim,mohamed'
console.log(myName.split(','))

let msg=  '              we love programming!'
console.log(msg.trim())
let msg1= '         we love programming'
console.log(msg1)

let firstname='shukri'
let secondname='ibrahim'
let fullname1= firstname.concat( " ",secondname)
console.log(fullname1)

//includes
let mymsg='hello world!, i am shukri';
console.log(mymsg.includes('shukri'))
let mymsg1='hello world! , i am shukri';
mymsg1.replace('shukri', 'faizo');
console.log(mymsg1.replace('shukri','faizo'));





