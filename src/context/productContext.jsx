import rootReducer from "../reducers";
import PropTypes from "prop-types";
import { createContext, useEffect, useReducer } from "react";
import { getAllProducts } from "../actions/productActions";

const initialState = {
  products: [],
  productsLoading: false,
  productError: false,
  productErrorMsg: "",
  singleProduct: [],
  singleProductLoading: false,
  singleProductError: false,
  singleProductErrorMsg: "",
};
export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer.product, initialState);

  useEffect(() => {
    getAllProducts(dispatch);
  }, []);
  return (
    <ProductContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  chilren: PropTypes.node,
};
