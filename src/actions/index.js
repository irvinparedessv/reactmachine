import { SET_ARTICLE_DETAILS, API, FETCH_ARTICLE_DETAILS,	BUY_PRODUCT,
	BUY_PRODUCT_DONE,FETCH_PRODUCTS,FETCH_PRODUCTS_DONE,PRODUCT_DONE } from "./types";
import axios from 'axios';
export function fetchArticleDetails() {
    return apiAction({
      url: "https://vending-machine-test.vercel.app/api/products",
      onSuccess: setArticleDetails,
      onFailure: () => console.log("Error occured loading articles"),
      label: FETCH_ARTICLE_DETAILS
    });
  }

  export const fetchProducts = () => dispatch => {
	dispatch({
		type: FETCH_PRODUCTS
	});	

	axios.get('https://vending-machine-test.vercel.app/api/products').then(products => {
		// Add some timeout to see loading
		setTimeout(() => {
			dispatch({
				type: FETCH_PRODUCTS_DONE,
				payload: products
			});
		}, 1000);
	});
};

  export const buyProduct = id => (dispatch, getState) => {
	dispatch({
		type: BUY_PRODUCT,
		payload: id
	});

	// emulate rest API to buy product and catch error as API isn't implemented
	axios.put(`api/products/${id}`).catch(() => {
		// Add some timeout to see loading
		setTimeout(() => {

			dispatch({
				type: BUY_PRODUCT_DONE,
				payload: id
			});
		}, 1000);
	});
};
export const DoneProduct = id => (dispatch, getState) => {
	dispatch({
		type: PRODUCT_DONE,
		payload: id
	});
};

  function setArticleDetails(data) {
    console.log(data);
    return {
      type: SET_ARTICLE_DETAILS,
      payload: data
    };
  }
  
  function apiAction({
    url = "",
    method = "GET",
    data = null,
    accessToken = null,
    onSuccess = () => {},
    onFailure = () => {},
    label = "",
    headersOverride = null
  }) {
    return {
      type: API,
      payload: {
        url,
        method,
        data,
        accessToken,
        onSuccess,
        onFailure,
        label,
        headersOverride
      }
    };
  }
  