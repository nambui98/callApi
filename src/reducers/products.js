import * as Types from '../constants/ActionTypes';
import {findIndex} from 'lodash';
var initialState=[
];

const products=(state=initialState, action)=>{
    var index;
    switch(action.type){
        case Types.FETCH_PRODUCTS:
            state=action.products;
            return [...state]
        case Types.DELETE_PRODUCT:
            index=findIndex(state, (product)=>product.id===action.id)
            console.log(index)
            state.splice(index, 1);
            return [...state]
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state]
        case Types.UPDATE_PRODUCT:
            index=findIndex(state, (product)=>product.id===action.product.id)
            state[index]=action.product;
            return [...state]
        default:return [...state]
    }
}
export default products;