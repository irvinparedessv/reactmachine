import {
	ADD_PRODUCT_DONE,PRODUCT_PROCESS
} from '../actions/types';

const initialState = [];
const reducer = (state = initialState, action) => {
	switch (action.type) {
	case ADD_PRODUCT_DONE:
		return [...state,
			action.payload
		]
		;
		case PRODUCT_PROCESS:
			if(action.payload.time===0){
				var elements= state.filter(element => element.time !=action.payload.time);
				return elements;
			}
                state.map(element=>{
                     if(element.id === action.payload.id && element.time ===action.payload.time)
					 element.time= element.time-1;

                })
				
				return [...state];
            
	default:
		return state;
	}
};

export default reducer;
