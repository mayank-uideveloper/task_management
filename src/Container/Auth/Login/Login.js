import CusButton from "../../../UI/CusButton/CusButton";
import CustomContainer from "../../../UI/CustomContainer/CustomContainer";
import InputGrid from "../../../UI/InputGrid/InputGrid";
import loginFunc from "./LoginFunc";

const Login = () => {
    const [loginState, loginChangeHandler, loginFuncHandler, errorState] = loginFunc();

    return (
        <CustomContainer title="Welcome to our Portal">
            <form>
                <InputGrid
                    label="Username"
                    placeholder="Enter Username"
                    value={loginState.username}
                    onChange={loginChangeHandler}
                />

                <InputGrid
                    label="Password"
                    type="password"
                    placeholder="Enter Password"
                    value={loginState.password}
                    onChange={loginChangeHandler}
                />

                <CusButton cusCls="fullwidth" cusClick={loginFuncHandler}>
                    Login
                </CusButton>
            </form>
        </CustomContainer>
    );
};

export default Login;
