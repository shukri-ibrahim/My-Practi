let marks=100
//grades from A...E
if(marks >=61 && marks <=100 ){
    console.log(' your grade is A');
}
else if(marks >=51 && marks <=60){
    console.log('your grade is B');

}
else if(marks >=41 && marks <=50){
    console.log('your grade is C');
}
else if(marks >=30 && marks <=40){
    console.log('your grade is D');
}
else if(marks >=0 && marks<=29){
    console.log('your grade is E');

}
else {
    console.log('you did not do exam');
}

// an Or functionality


let  name='shukri';
if(name === 'shukri' || name === 'ibrahim'){
    console.log('same person');
}

let  name1='shukri';
if(name1 === 'shukri' &&  name1 === 'ibrahim'){
    console.log('same person');
}
let  name2='barwaqo';
if(name2 === 'shukri' ||  name2 === 'ibrahim'){
    console.log('same person');
}
else{
    console.log('not me');
}
let  name3='barwaqo';
if(name3 === 'shukri' && name3 === 'ibrahim'){
    console.log('same person');
}
else{
    console.log('not me');
}
