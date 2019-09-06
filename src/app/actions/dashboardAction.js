import {DASHBOARD_GET} from "./types"
import dashboardJson from "../mockJson/dashboardJson"

export const getDashoardDetails = () =>{
	return{
		type : DASHBOARD_GET,
		payload : dashboardJson
		}
}