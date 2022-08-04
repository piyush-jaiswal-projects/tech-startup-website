import React, {useState} from "react";
import "../styles/usersignin.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Usersignin(){

    const [password, setPassword] = useState("password");
    const [REGNAME, setREGNAME] = useState();
    const [REGEMAIL, setREGEMAIL] = useState();
    const [REGUSER, setREGUSER] = useState();
    const [REGPASS, setREGPASS] = useState();
    const [LOGUSER, setLOGUSER] = useState();
    const [LOGPASS, setLOGPASS] = useState();
    let navigate = useNavigate();

    function handleCheckbox(){
        if(document.getElementById("checkBox").checked){
            setPassword("text");
        }
        else{
            setPassword("password");
        }
    }

    function registerUser(){
        axios.post('/register', {
            'name': REGNAME,
            'email': REGEMAIL,
            'username': REGUSER,
            'password': REGPASS
        }).then((res) => {
            if (res.data.Message === "Already registered") {
                alert("Already registered! Please Login");
            }
            else if (res.data.Message === "Registration Success") {
                alert("Registration Success");
                const userRegCookie = "username="+document.getElementById("regUser").value;
                const passRegCookie = "password="+document.getElementById("regPass").value;
                document.cookie = userRegCookie; 
                document.cookie = passRegCookie;
                navigate("/userportal");
            }
        });
        
    }

    function loginUser(){
        axios.post('/register', {
            'username': LOGUSER,
            'password': LOGPASS
        }).then((res) => {
            if (res.data.Message === "Not registered") {
                alert("User not found. Please register");
            }
            else if (res.data.Message === "Login Success") {
                alert("Login Success");
                const userRegCookie = "username="+document.getElementById("logUser").value;
                const passRegCookie = "password="+document.getElementById("logPass").value;
                document.cookie = userRegCookie; 
                document.cookie = passRegCookie;
                navigate("/userportal");
            }
        });
    }


    return(
        <div className="user-section">
        <div className="registration-section">
        <h1 className="reg-section-heading">Register Here</h1>
        <input className="register-input" id="regName" value={REGNAME} type="text" name='Name' placeholder='Name' autoComplete="off"></input>
        <input className="register-input" id="regEmail" value={REGEMAIL} type="email" name='Email' placeholder='Email' autoComplete="off"></input>
        <input className="register-input" id="regUser" value={REGUSER} type="text" name='Username' placeholder='Username' autoComplete="off"></input>
        <input className="register-input" id="regPass" value={REGPASS} type={password} name='Password' placeholder='Password' autoComplete="off"></input>
        <br></br>
        <input className="login-input check" id="checkBox" type="checkbox" name='Show Password' onClick={handleCheckbox}></input>
        <label className="checkBox">Show Password</label>
        <br></br>
        <button className="register-btn" onClick={registerUser}>Register Now</button>
        </div>

        <div className="login-section">
        <h1 className="login-section-heading">Login</h1>
        <input className="login-input" id="logUser" value={LOGUSER} type="text" name='Username' placeholder='Username' autoComplete="off"></input>
        <input className="login-input" id="logPass" value={LOGPASS} type={password} name='Password' placeholder='Password' autoComplete="off"></input>
        <br></br>
        <input className="login-input check" id="checkBox" type="checkbox" name='Show Password' onClick={handleCheckbox}></input>
        <label className="checkBox">Show Password</label>
        <br></br>
        <button className="login-btn" onClick={loginUser}>Login</button>
        </div>

        </div>
    );
}

export default Usersignin;