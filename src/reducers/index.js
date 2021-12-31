import { combineReducers } from 'redux';
import products from './products';
import purchasedProducts from './purchasedProducts';
import completedProducts from './completedProducts';
const rootReducer = combineReducers({
	products,
	purchasedProducts,
	completedProducts

});

export default rootReducer;
