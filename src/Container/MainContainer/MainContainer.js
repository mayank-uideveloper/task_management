import { useContext } from "react";
import { AuthContext } from "../../Context/Auth-Context";

import AuthContainer from "../Auth/Auth";
import CusWrapper from "./CusWrapper";

const MainContainer = () => {
    const ctx = useContext(AuthContext);
    return <>{!ctx.isLoggedIn ? <AuthContainer /> : <CusWrapper />}</>;
};

export default MainContainer;
