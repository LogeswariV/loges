import React,{Component} from "react"
import "./login.css"
import {PostLogin} from "../../actions/loginAction"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:'',
			username_error:''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	componentWillUnmount(){
		this.setState({
			username:'',
			password:''
		})
	}
	handleChangeUsername = e =>{
		this.setState({username:e.target.value})
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		 if (e.target.value.match(mailformat))
		  {
		   this.setState({username_error:''})
		  }else{
		    this.setState({username_error:"Please enter a valid email"})
		  }
			}
	handleChangePassword = e =>{
		this.setState({password:e.target.value})
		
	}
	handleSubmit(e){
		e.preventDefault();
		var loginDetails = {username:this.state.username,password:this.state.password}
		this.props.PostLogin(loginDetails)
	}
	render(){
		return(
			<div>
			 <div className="login-form">
                    <h4 className="modal-title w-100 font-weight-bold " align="center">Login</h4>
                        <form onSubmit={this.handleSubmit}>  
                                <label>UserName</label>
                                <input  type="username" className="form-control" name="UserName" placeholder="Email" value={this.state.username} onChange={this.handleChangeUsername}/><br/>
                                <p className="error-text">{this.state.username_error}</p>
                                <label>Password</label>  
                                <input  type="password" className="form-control" name="Password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword}/><br/>
                                <button disabled={this.state.username && this.state.password.length>6 ? this.state.username_error === '' ? false : true : true} className="btn btn-lg btn-block btn-dark" type="submit">Login</button>
                        </form>                   
                </div>
            </div>
			)
	}
}
const mapStatetoProps = (state) =>({
	login : state.login
})


export default connect(mapStatetoProps,{PostLogin})(withRouter(Login));