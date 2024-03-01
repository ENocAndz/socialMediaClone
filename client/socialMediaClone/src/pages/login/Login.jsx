import  "./login.scss"
import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
    const {login} = useContext(AuthContext);

    const handleLogin = () =>{
        login();
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
                <form className="loginForm" action="">
                    <input type="text" placeholder="Username" name="" id="" />
                    <input type="password" name="" id="" placeholder="Password" />
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login