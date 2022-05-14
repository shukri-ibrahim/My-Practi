
    let food = [
        {name: 'chicken', price: 450,},
        {name: 'pilau', price: 400,},
        {name: 'chips', price: 200,},
    ]
    let prices = [400, 450,300,200, 150,100]
    let totalprice = prices.reduce((prev,next) => {
        return prev+next
    })
    console.log(totalprice)

      let foods = [
        {name: 'chicken', price: 450,},
        {name: 'pilau', price: 400,},
        {name: 'chips', price: 200,},
    ]
    
    let totalFood = food.reduce((prev,next) =>prev+next.price,0)
    console.log(totalFood);
    
    
    
    