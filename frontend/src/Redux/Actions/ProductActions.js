import { ActionTypes } from "../Constants/ActionType";
export const setProducts = (products) => {
    return {
      type: ActionTypes.SET_PRODUCTS,
      payload: products,
    };
  };
console.log(setProducts);
export const selectedProducts=(product)=>{
    return{
        type : ActionTypes.SELECTED_PRODUCT,
        payload:product,
    };
};
// export const selectedProfile =(Profile)=>
// {
//     return{
//         type : ActionTypes.SELECTED_PROFILE,
//         payload:Profile,
//     };
// };

