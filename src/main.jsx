import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProviders from './providers/AuthProviders';
import MainLayOut from './LayOut/MainLayOut';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/Register/Register';
import HomeDetails from './Pages/HomeDetails/HomeDetails';
import Protect from './Components/privateRoutes/Protect';
import Error from './Pages/Error/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement :<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./Fake.json"),
      },
      {
        path: "/:id",
        element: <Protect> <HomeDetails></HomeDetails></Protect>,
        loader: () => fetch("./Fake.json"),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/aboutUs",
        element: <Register></Register>
      },
      {
        path: "/profile",
        element: <Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
