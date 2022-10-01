import './App.css';
import { AuthContext } from './Context/Auth-Context';

function App() {
  return (
    <AuthContext.Provider value={{
      isLoggedIn: false
    }}>
    Mayank
    </AuthContext.Provider>
  );
}

export default App;
