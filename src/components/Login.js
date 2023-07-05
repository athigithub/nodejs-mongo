import React from "react";
import { Link } from "react-router-dom";
export const Login = () =>
{
    const textbox ={
        width:'500px',
        height:'80px',
        marginTop:'50px'
    }
    const center ={
        textAlign: 'center'
    }
    const div={
        marginLeft:'50px'
    }
    const linkstyle={
        
        color: 'rgb(5, 115, 115)'
    }
    const btn ={
        marginLeft:'200px',
        marginTop:'50px',
        backgroundColor:'rgb(5, 115, 115)',
        color:'white',
        width:'120px',
        height:'50px'

    }
    return(
        <div className="loginDiv">
          
            <div className="style">
                <h1 >Login</h1>
                <div className="mb-3">
                     <input type="text" style={textbox} className="form-control" placeholder="Email"/> 
                </div>
                <div className="mb-3">
                    <input type="email"  style={textbox} className="form-control" placeholder="Password" /> 
                </div>
                <div className="form-check" style={div}>
                    <input  className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    Show Password
                </div>
                <button style={btn} className="btn " type="button"  >SIGN IN</button>
                <div style={{marginLeft:'150px',marginTop:'20px'}} >Forgot <Link style={linkstyle} to="">Username</Link>/<Link style={{color:'rgb(5, 115, 115)'}} to="">Password</Link>?</div>
                <div style={{marginLeft:'150px',marginTop:'20px'}}>Don't have an account?<Link  style={linkstyle} to="/">Sign up</Link></div>
            </div>
         </div>
    )
}