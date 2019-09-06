import {LOGIN_FAIL,LOGIN_SUCCESS} from "../actions/types"

const initialState={login:'',errors:{}}
export default (state=initialState,action) =>{
	switch(action.type){
		case LOGIN_SUCCESS:
			const values = action.payload
			return{
				...state,
				login:values
			}
		case LOGIN_FAIL:
			return{
				...state,
				errors:action.payload
			}
		
		default:
			return state

	}
}