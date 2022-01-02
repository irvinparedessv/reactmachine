import { SET_ARTICLE_DETAILS, API, ADD_PRODUCT_DONE,	BUY_PRODUCT,
	BUY_DONE,FETCH_PRODUCTS,FETCH_PRODUCTS_DONE,PRODUCT_DONE,PRODUCT_PROCESS } from "./types";
import axios from 'axios';
import { v4 as uuid } from 'uuid';

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
	})
  .catch(products => {

    alert("some error");
  });
};

  export const buyProduct = (id,time) => (dispatch, getState) => {

	dispatch({
		type: BUY_PRODUCT,
		payload: id
	});


		// Add some timeout to see loading
		setTimeout(() => {
      dispatch({
				type: BUY_DONE,
				payload: id
			});


			dispatch({
				type: ADD_PRODUCT_DONE,
				payload: {id:id,time:time}
			});
		}, 1000);


  var i=0;
  var refreshInterval=  setInterval(() => {
     
			dispatch({
				type: PRODUCT_PROCESS,
				payload:{id:id,time:time-i}
			});

if(i==time){
      dispatch({
				type: PRODUCT_DONE,
				payload: id
			});
      clearInterval(refreshInterval);
    }
    i++;
		}, 1000);


};

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
  