let info ={
    name: 'shukri', 
    age: 22,
}

info['age'] = 23
console.log(info);

const info2 = {
    name: 'shukri', 
    age: 25,
}
let keyValue = 'age'
let newValue = 30
info2['keyValue'] = newValue

console.log(info2);
console.assert(JSON.stringify(info) === JSON.stringify(info2), 'failed result');

