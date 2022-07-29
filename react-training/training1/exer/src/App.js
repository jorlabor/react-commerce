import logo from './logo.svg';
import './App.css';
import Users from './pages/Users';
import AddUser from './pages/Users/addUser';
import { ToastContainer } from 'react-toastify';
import {Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
          <Route path="/" element={<Users />}/>
          <Route path="/addUser" element={<AddUser />}/>
      </Routes>
    </div>
  );
}

export default App;
