import {
	PRODUCT_DONE
} from '../actions/types';

const initialState = [
];

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case PRODUCT_DONE:
		return [...state,
			action.payload
		];
	default:
		return state;
	}
};

export default reducer;
