import UsuarioProvider from "./contexts/UsuarioContext";
import Login from "./pages/Login";
import './index.css'

const App = () => {
  return (
    <>
      <UsuarioProvider>
        <Login />
      </UsuarioProvider>
    </>
  );
}

export default App;