import "./App.css";
import MainContainer from "./Container/MainContainer/MainContainer";
import { AuthContextProvider } from "./Context/Auth-Context";


function App() {
    return (
        <AuthContextProvider>
            <MainContainer />
        </AuthContextProvider>
    );
}

export default App;
