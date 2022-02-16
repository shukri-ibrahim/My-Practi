function palindrom(str){
    let reversedString =  str.toLowerCase().split('').reverse().join('')
    if(str === reversedString){
       console.log(`${str} is a palidrom`)
    }
    else {
       console.log(`${str} is not a palidrom`)
    }
    return reversedString
  }
  // console.log(palindrom('dad'));
  // console.log(palindrom('MUM'));
  // console.log(palindrom('cat'));
  palindrom('DAD')

  function reverse(str){
    let reversed = ''
    for(let i = str.length - 1; i >= 0; i--){
     reversed =reversed + str[i]
    }
    return reversed
  }
  console.log(reverse('cat'));
  
 
 function reverse(str){
    let reversed = ''
    for(let i = str.length - 1; i >= 0; i--){
     reversed =reversed + str[i]
    }
    return reversed
  }
  console.log(reverse('cat'));
  function isPalindrom(str){
    if(str === reverse(str)){
      console.log(`${str} is a palidrom`)
    }
    else {
      console.log(`${str} is not a palidrom`)
   }
   return str
  }
  console.log(isPalindrom('cat'));
  console.log(isPalindrom('mum'));
  console.log(isPalindrom('MUM'));
  console.log(isPalindrom('mum MUM'));

  