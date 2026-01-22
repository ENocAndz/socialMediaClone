import  "./login.scss"
import {Link, useNavigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useState } from "react";

const Login = () => {
    const [inputs, setInputs] = useState({
        username:"",
        password:"",
    });
    const [err, setErr] = useState(null);

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
    };
    const {login} = useContext(AuthContext);

    const handleLogin = async (e) =>{
        e.preventDefault()
        setErr(null); // Clear previous errors
        try{
            await login(inputs)
            navigate("/")
        }catch(err){
            // Change this line:
            // err.response.data contains the string "Wrong password or username!"
            setErr(err.response?.data || "An unexpected error occurred");
        }
    };
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello world</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident exercitationem placeat labore, sit reprehenderit corporis ab itaque in culpa odit totam iusto repellendus praesentium, quas natus. Natus voluptatibus deserunt eius?</p>
                <span>Don't you have an account?</span>
                <Link to="/register">
                    <button>Register</button>
                </Link>
                
            </div>
            <div className="right">
                <h1>Login</h1>
                <form className="loginForm">
                    <input type="text" placeholder="Username" name="username" onChange={handleChange} />
                    <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                    {err && <span style={{ color: "red", marginTop: "10px" }}>{err}</span>}
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login