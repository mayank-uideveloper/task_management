import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/Auth-Context";

const LoginFunc = () => {
    const ctx = useContext(AuthContext);
    const [loginState, setLoginState] = useState(() => ({
        username: "",
        password: ""
    }));

    const [errorState,setErrorState] = useState({});

    const loginChangeHandler = (e) => {
        const {name,value} = e.target;
        setLoginState({
            ...loginState,
            [name] : value
        })
    }

    const loginFuncHandler = (e) => {
        console.log(errorState);
        e.preventDefault();        
        ctx.LoginHandler(loginState.username, loginState.password);
        setLoginState({
            username: "",
            password: ""
        });

    }

    return [loginState, loginChangeHandler, loginFuncHandler, errorState];
}

export default LoginFunc;