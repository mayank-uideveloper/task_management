import { useContext } from "react"
import { AuthContext } from "../../../Context/Auth-Context"
import CustomContainer from "../../../UI/CustomContainer/CustomContainer";

const Login = () => {
    const ctx = useContext(AuthContext);
    return(
        <CustomContainer title="Welcome to our Portal">
            Mayank df
        </CustomContainer>
    )
}




export default Login