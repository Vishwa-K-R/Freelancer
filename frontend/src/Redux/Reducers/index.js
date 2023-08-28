import { combineReducers } from "redux";
import { productsReducer,profileProduct,selectedCart,selectedProduct, } from "./ProductReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProduct,
  // profile: profileProduct
});
  export default reducers;