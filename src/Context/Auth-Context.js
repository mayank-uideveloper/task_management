import React, { useEffect, useState } from "react"
import { hasLoggedIn } from "../Helper/Constant";
import { Storage } from "./../Helper/Storage";

export const AuthContext = React.createContext({
    isLoggedIn: false,
    isAuthRegister: false,
    LoginHandler: () =>{},
    LogoutHandler: () => {}
});

export const AuthContextProvider = (props) => {
    Storage.init();

    const [isLogin, setIsLogin] = useState(false);
    const [isAuthRegister, setIsAuthRegister] = useState(false);

    
    const LoginHandler = (username,password) => {
        if(username === 'admin' && password === 'password') {
            setIsLogin(true);
            localStorage.setItem(hasLoggedIn,JSON.stringify(true));
        }
    }

    const LogoutHandler = (e) => {
        e.preventDefault();
        setIsLogin(false); 
        localStorage.setItem(hasLoggedIn,JSON.stringify(false));       
    }

    useEffect(() => {
        const LoginInfo = localStorage.getItem(hasLoggedIn);
        if(LoginInfo === 'true') {
            setIsLogin(true);
        }
    },[isLogin])

    return(
        <AuthContext.Provider
            value={{
                isLoggedIn: isLogin,
                LoginHandler : LoginHandler,
                LogoutHandler: LogoutHandler,
                isAuthRegister: isAuthRegister
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}



