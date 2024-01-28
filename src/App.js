
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import RegisterForm from './pages/Register/RegisterForm';
import AdminLogin from './pages/AdminLogin/AdminLogin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register' element={<RegisterForm/>}/>
        <Route path='/Admin' element={<AdminLogin/>}/>
      </Routes>
    </div>
  );
}

export default App;
