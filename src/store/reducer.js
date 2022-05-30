import {initialState} from './products.js'

         


// eslint-disable-next-line import/no-anonymous-default-export
export default  (state = initialState , action)=>{

    let {type , payload} = action
    switch(type){
        case 'GET' : 
        return {...state ,activeCategory : payload };
           
        default :
        return state ;
    }
}