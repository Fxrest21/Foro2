// Project: login-google
import './App.css'
import FormsFirebase from "./page/FormsFirebase";
import { AuthProvider } from './context/authContext'

function App() {
  return (
    <div>
      <AuthProvider>
        <h1>LoginGoogle</h1>
        <FormsFirebase />
      </AuthProvider>
    </div>
  );
}

export default App
