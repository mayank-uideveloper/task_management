import { useContext } from "react";
import { AuthContext } from "../../Context/Auth-Context";
import { logoImg } from "../../Helper/Constant";
import Login from "./Login/Login";
import Register from "./Register/Register";
const AuthContainer = () => {
    const ctx = useContext(AuthContext);

    return (
        <>
            <div className="container">
                <div className="d-flex align-item-center justify-content-center my-5">
                    <div className="logo-sec">
                        <img src={logoImg} className="img-fluid" alt="logo" />
                    </div>
                </div>
                

                {!ctx.isAuthRegister ? <Login /> : <Register />}
            </div>
        </>
    );
};

export default AuthContainer;
