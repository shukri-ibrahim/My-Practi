let info ={
    //strings
    name: 'shukri',
    //numbers 
    age: 67,
    //boolean values
    isfemale: true,
    //Arrays
    marks:[23,45,70,68,],
    reverse: reverse,
    

      
     
     
      

}
console.log(info.name);
console.log(info);
console.log(info.marks);
console.log(info.marks[info.marks.length - 1]);
console.log(info.name[info.name.length-1]);
console.log(info.name.charAt(info.name.length-1));
info.name ='mohamed'
console.log(info.name);
info.secondName='ibrahim',
console.log(info);
console.log(info.reverse('cat'));

function reverse(str){
    let reversed = ''
    for(let i = str.length - 1; i >= 0; i--){
     reversed =reversed + str[i]
    }
    return reversed
  }  
  console.log(info.reverse('cat'));
  let car ={
    name: 'ferari',
    cost: ' 35 million kenya shilling',
    wheels: 3,
    numberofWheels:function(){
        return this.wheels +1
    }

}
info = car
console.log(car.wheels);
console.log(car.numberofWheels);

let car1 = {
    name: 'ferrari',
    wheels: 4,
    cost: '35 kenya million',
    ferrariInfo: function(){
       console.log(`name is  ${this.name} and the cost is ${this.cost}`);
    }
  }
  info.car1 = car
  console.log(car1.wheels);
  console.log(car1.ferrariInfo());

  //for...in
const names = {
    fname: 'shukri',
    sname: 'ibrahim',
    lname: 'mohamed',
}
for (const name in names) {
    console.log(name);
    console.log(names[name]);
    console.log(names[name].toUpperCase());
}
let animals =['cows', 'cats', 'dogs', 'donkeys',]
for([ index, animal] of animals.entries()) {
    console.log(index,animal);
    
    
}
