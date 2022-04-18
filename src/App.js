import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import './App.css';
import Home from './comp/Home';
import Local from './comp/Local';
import International from './comp/International';
import AddPost from "./comp/AddPost";
import Login from './comp/Login';
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from './fireconfige';
import logo from '../src/logo.png';
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  
    const Usersignout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  
  return( 
  <Router>
    <nav>
      <img src={logo} alt="logo" className="photo" />
      <Link to="/">Home</Link>
      <Link to="/local">Local</Link>
      <Link to="/international">International</Link>
       {!isAuth ? (
          <Link to="/login"> Login </Link>
        ):
        (
          <>
            <Link to="/addpost"> Create Post </Link>
            <button onClick={Usersignout}>  Log Out</button>
          </>
        )}
    </nav>
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth}/>}></Route>
      <Route path="/local" element={<Local/>}></Route>
      <Route path="/international" element={<International/>}></Route>
      <Route path="/addpost" element={<AddPost isAuth={isAuth}/>}></Route>
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
