import React,{Component} from "react"
import {getDashoardDetails} from "../../actions/dashboardAction"
import { connect } from "react-redux"
import "./employeeDetails.css"
import {withRouter} from "react-router-dom"

class EmployeeDetails extends Component{
	componentWillMount(){
		this.props.dashboardList()
	}

	render(){
		return(
			<div>
				<h4 className="bold " align="center" id="title">Dashboard</h4>
					<table className="table table-striped table-border" align="center" style={{padding:'10px',maxWidth:'800px'}}>
					  <thead>
					    <tr>
					      <th scope="col">Id</th>
					      <th scope="col">Name</th>
					      <th scope="col">Age</th>
					      <th scope="col">Gender</th>
					      <th scope="col">E-mail</th>
					      <th scope="col">Phone</th>
					    </tr>
					  </thead>
					  
					  <tbody>
					  {this.props.employeeList.employeeList.length && this.props.employeeList.employeeList.map(item=>{
						return(
					    <tr key={item.id}>
					      <td>{item.id}</td>
					      <td>{item.name}</td>
					      <td>{item.age}</td>
					      <td>{item.gender}</td>
					      <td>{item.email}</td>
					      <td>{item.phoneNo}</td>
					    </tr>
					    )
				
			})}
					  </tbody>
					</table>
					
			</div>
			)
	}
}
const mapStatetoProps = (state) =>({
	employeeList : state.employeeList
})
const mapDispatchtoProps = (dispatch)=>({
	dashboardList : () =>{dispatch(getDashoardDetails())}
})
export default connect(mapStatetoProps,mapDispatchtoProps)(withRouter(EmployeeDetails));