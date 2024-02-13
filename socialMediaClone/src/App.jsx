import LeftBar from "./components/leftBar/LeftBar";
import NavBar from "./components/navBar/NavBar";
import RightBar from "./components/rightBar/RightBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile"
import "./style.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {

  const currentUser = true;

  const {darkMode} = useContext(DarkModeContext)

  const Layout =()=>{
  return(
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <NavBar/>
      <div style={{display:"flex"}}>
        <LeftBar/>
        <div style={{flex:6}}>
          <Outlet/>
          </div>
        
        <RightBar/>
      </div>
    </div>
  )
  }

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:  <ProtectedRoute><Layout/></ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
