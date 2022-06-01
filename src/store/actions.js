
  
 export  function actualData(data) {
  console.log(data,'dddddddddddddddddddddd')
 return {
     
   type: 'GET',
   payload: data
   
 }
}


 
export  function decreaseStock(data) {
 console.log(data,'dddddddddddddddddddddd')
return {
    
  type: 'decrease',
  payload: data
  
}
}

export  function increment(data) {
 console.log(data,'dddddddddddddddddddddd')
return {
    
  type: 'increment',
  payload: data
  
}
}

export  function getDetails(data) {
 console.log(data,'dddddddddddddddddddddd')
return {
    
  type: 'details',
  payload: data
  
}
}