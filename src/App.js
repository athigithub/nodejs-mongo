import "./components/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import {Login} from "./components/Login";
import {SignUp} from "./components/Signup"

import { createBrowserRouter,RouterProvider} from 'react-router-dom';
function App() {
  const myRouter=[
    {
      path:"/",
      element:<SignUp/>},
      {
      path:"/login",
      element:<Login/>}]
  const browserRoutes = createBrowserRouter(myRouter)
  return (
    <div >
       <RouterProvider router={browserRoutes}/>
   </div>
  );
}

export default App;
