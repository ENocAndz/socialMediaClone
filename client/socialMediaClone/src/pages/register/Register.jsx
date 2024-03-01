import "./register.scss"
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div className='register'>
        <div className="card">
            <div className="left">
                <h1>Register</h1>
                <form action="">
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email" name="" id="" />
                    <input type="password" placeholder="Password" name="" id="" />
                    <input type="text" placeholder="Name" />
                    <button>Register</button>
                </form>
            </div>
            <div className="right">
                <h1>Social Media</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae molestias magnam temporibus sit aliquam veritatis, officiis molestiae, quas ad nobis, neque quisquam commodi amet eveniet. Quisquam distinctio veniam nostrum eum!</p>
                <span>Do you have an account?</span>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                    
                
                
            </div>
        </div>
    </div>
  )
}

export default Register