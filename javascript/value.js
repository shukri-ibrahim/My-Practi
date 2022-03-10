

const myArr =[1, 2, 3];
const arrTwo = myArr.splice(0,4).slice(0,2);
arrTwo[0] = 9;
console.log(arrTwo);

function truthy(x){
    if (5 ===x){
        return true;
    } else{ return false; }
}
console.log(truthy(6));

let y = 5;
console.log(y===(6));

const race = "100 dash";
        const runners = ["Usain Bolt", "Asafa Powel","Justin Galtlin"];
        const result = runners.map((runner, i) => ({name: runner,race,place: i + 1}))
        console.log(result);

         {console.log("problem?");}

         let mydinner =[
            {id:"qwe234dfh",name:"Burger",price:500},
            {id:"qwe234dfh",name:"meet",price:600},
            {id:"qwe234dfh",name:"chicken",price:500}
        ]
        
        const totalprice=mydinner.reduce((prev,next)=>prev+next.price, 0);
        console.log(totalprice)

      

          const obj = {
              name: 'faisal',
              age: 20,
              isPresent: true,
          }
          let faisalinfo = {... obj}
          console.log(faisalinfo);

    
