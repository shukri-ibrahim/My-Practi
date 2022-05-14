const Myname=(firstname, secondname) =>{
    console.log(firstname, secondname)
}

let myName = () => {
    console.log('shukri ibrahim');
}
myName()
let square = (mynum) => {
    let result = mynum * mynum
    return result
}
console.log(square(6));
let power = (num) => {
    return num * num
}
console.log(power(5));
let Names = (firstName, lastName) =>{
  let fullName =firstName + ' ' + lastName
    return fullName
}