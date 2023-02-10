import { BrowserRouter as Router, Switch, Route, Routes, Link, } from "react-router-dom";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App () {
    const user = false;
    return (
    <Router> 
        <TopBar />
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/register" element={user ? <Home/> : <Register />} ></Route>
            <Route path="/login" element={user ? <Home/> : <Login />} ></Route>
            <Route path="/write" element={user ? <Write /> : <Register />} ></Route>
            <Route path="/post/:postId" element={<Single />} ></Route> 
        </Routes>
    </Router>
    );
}

export default App