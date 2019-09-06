import { combineReducers } from 'redux';
import LoginReducers from "./loginReducers"
import DashboardReducer from "./dashboardReducer"
export default combineReducers({
	login : LoginReducers,
	employeeList: DashboardReducer

})