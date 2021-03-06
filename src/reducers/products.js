import {
	FETCH_PRODUCTS,
	FETCH_PRODUCTS_DONE,
	BUY_PRODUCT,
	BUY_DONE
} from '../actions/types';
import keyBy from 'lodash/keyBy';

const initialState = {
	loading: false,
	data: {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case FETCH_PRODUCTS:
		return {...state,
			loading: true
		};
	case FETCH_PRODUCTS_DONE:
		return {...state,
			loading: false,
			data: keyBy(action.payload.data.data.map(product => (
				{...product,
					loading: false
				}
			)), 'id')
		};
	case BUY_PRODUCT:
		return {...state,
			data: {...state.data,
				[action.payload]: {...state.data[action.payload],
					loading: true
				}
			}
		};
		case BUY_DONE:
		return {...state,
			data: {...state.data,
				[action.payload]: {...state.data[action.payload],
					loading: false
				
				}
			}
		};
	default:
		return state;
	}
};

export default reducer;
