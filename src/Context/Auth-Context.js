import React from "react"
import { Storage } from "./../Helper/Storage";

export const AuthContext = React.createContext({
    isLoggedIn: false
});

export const AuthContextProvider = (props) => {

    Storage.init();

    return(
        <AuthContext.Provider
            value={{
                isLoggedIn: false,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}



