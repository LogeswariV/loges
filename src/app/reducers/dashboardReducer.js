import {DASHBOARD_GET} from "../actions/types"

const initialState = {employeeList:''}
export default (state=initialState,action) =>{
	switch(action.type){
		case DASHBOARD_GET:
			return{
				...state,
				employeeList:action.payload.user
			}
		default:
			return state
	}
}