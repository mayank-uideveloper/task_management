import "./App.css";
import MainContainer from "./Container/MainContainer/MainContainer";
import { AuthContext } from "./Context/Auth-Context";
import { Storage } from "./Helper/Storage";

function App() {
  Storage.init();
  
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: false,
            }}
        >
            <MainContainer />
        </AuthContext.Provider>
    );
}

export default App;
