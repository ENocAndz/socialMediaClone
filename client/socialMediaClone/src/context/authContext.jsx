import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user"))|| false
    );

    const login = async (inputs) => {
        try {
            const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
                withCredentials: true,
            });
            setCurrentUser(res.data);
        } catch (err) {
            // This allows the error to be passed back to your Login component
            // instead of crashing the Context provider
            throw err; 
        }
    };

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{currentUser,login}}>
            {children}
        </AuthContext.Provider>
    )
};