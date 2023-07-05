import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () =>
{
    const textbox ={
        width:'500px',
        height:'40px',
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
        marginTop:'30px',
        backgroundColor:'rgb(5, 115, 115)',
        color:'white',
        width:'120px',
        height:'50px'

    }

    return(
        <div className="loginDiv">
          
            <div className="style">
                <h1>Sign Up</h1>
                <div className="mb-3">
                     <input style={textbox} type="text" className="form-control" placeholder="Name"/> 
                </div>
                <div className="mb-3">
                     <input style={textbox} type="email" className="form-control" placeholder="Email"/> 
                </div>
                <div className="mb-2">
                    <input style={textbox} type="password" className="form-control" placeholder="Password" /> 
                </div>
                <div className="mb-2">
                    <input style={textbox} type="password" className="form-control" placeholder="Confirm Password" /> 
                </div>
                <div style={{marginLeft:'150px',marginTop:'20px'}}>Already have an account?<Link  style={linkstyle} to="/login">Login</Link></div>
                <button style={btn} className="btn " type="button"  >SIGN UP</button>
               
            </div>
          
            
        </div>
    )
}