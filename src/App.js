import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter( /* application routes are defined here */ );

function App() { 
 return (
  <RouterProvider router={ router } />
 );
}

export default App;
