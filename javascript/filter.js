
    let food = [
        {name: 'chicken', price: 450,},
        {name: 'pilau', price: 400,},
        {name: 'chips', price: 200,},
    ]
    let prices = [400, 450,300,200,]
    let expensivefoods = prices.filter((check) =>{
        return check > 200
    })
    console.log(expensivefoods);
    let foods = [
        {name: 'chicken', price: 450,},
        {name: 'pilau', price: 400,},
        {name: 'chips', price: 200,},
    ]
    let filteredfoods = foods.filter((check) =>{
        return check.price > 200
    })
    console.log(filteredfoods);