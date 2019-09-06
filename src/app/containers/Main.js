import React,{Component} from "react"
import {Route,Router,Switch} from "react-router-dom"
import Login from "../components/login/login"
import EmployeeDetails from "../components/employeeDetails/employeeDetails"
import history from "../../history"


class Main extends Component{
	render(){
		return(
			<div>
			<Router history={history}>
			<Switch>
			<Route path="/login" exact component={Login}/>
			<Route path="/employeeDetails" exact component={EmployeeDetails}/>
			</Switch>
			</Router>
			</div>
			)
	}

}
export default Main;