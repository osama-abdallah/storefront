import {initialState} from './products.js'

         


export const catReducer= (state = initialState , action)=>{

    let {type , payload} = action
    switch(type){
        case 'GET' : 
        return {...state ,activeCategory : payload };
           
        default :
        return state ;
    }
}