import {LOGIN_SUCCESS,LOGIN_FAIL} from "./types"
import {loginJson} from "../mockJson/loginJson"
import history from "../../history"

export const loginSuccess = val =>{
	return{
		type:  LOGIN_SUCCESS,
		payload: val
		}
}
export const loginFail = val =>{
	return{
		type: LOGIN_FAIL,
		payload:val
	}
}
export const  PostLogin = (val) =>{
	return dispatch=>{
		if(loginJson.username === val.username && loginJson.password === val.password){
			dispatch(loginSuccess(val));
			history.push("/employeeDetails")
		}else{
			dispatch(loginFail(val))
			return(alert('Username or Password is Incorrect'))
		}


	}
}