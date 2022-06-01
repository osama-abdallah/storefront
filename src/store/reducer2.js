import {initialState} from './products.js'

export const productReducer= (state = initialState , action)=>{

    let {type , payload} = action
    switch(type){

        case 'decrease' : 
        console.log('hhh',state);


         let updatedArr =   state.products.map(item=>{
            if(item.name === payload.name){
                return {
                    name: item.name,
                    description: item.description ,
                    category: item.category,
                    price: item.price,
                    inventoryCount:  item.inventoryCount -1 ,
                    img:  item.img
                }
            }
            return item 
            
        })

        return {
            ...state , products : updatedArr
        }
        
        
        
            
     
        
      
           

        case 'details':
        return  {
            ...state ,activeCategory : payload
        }




            
        

        default:
            return state
    }
};