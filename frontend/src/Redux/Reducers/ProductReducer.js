import { ActionTypes } from "../Constants/ActionType";

const intialState = {
    products: [],
  };
  
  export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_PRODUCTS:
        return {...state,products:payload};
      default:
        return state;
    }
  };

  export const selectedProduct = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
        return {...state,products:payload};
      default:
        return state;
    }
  };
  console.log("datas",selectedProduct);


  // const intialProfile=
  // {
  //   profile:[],
  // };
  // export const profileProduct  = (state = intialProfile,{type ,payload})=>
  // {
  //   switch (type) {
  //       case ActionTypes.SELECTED_PROFILE:
  //         return {...state,profile:payload};
  //       default:
  //         return state;
  //     }
  // }