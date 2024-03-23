import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './Homepage.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ServicePage from './Pages/Services/ServicePage';
import ContactUs from './Pages/ContactUS/ContactUS';
import AppointmentPage from './Pages/Appointment/AppointmentPage';
import LoginPage from './Pages/Login/LoginPage.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import ErrorMessage from './Pages/ErrorMessage/ErrorMessage.jsx'
import { AuthProvider } from './Pages/store/auth.jsx';
const route=createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children:[
      {
        path:"",
        element:< Homepage/>
      },
      {
        path:"services",
        element:<ServicePage/>
      },{
        path:"contactus",
        element:<ContactUs/>
      },{
        path:"appointment",
        element:<AppointmentPage/>
      },{
        path:"login",
        element:<LoginPage/>
      },{
        path:"signup",
        element:<SignUp/>
      },{
        path:"*",
        element:<ErrorMessage/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <React.StrictMode>
   <RouterProvider router={route}/>
  </React.StrictMode>
  </AuthProvider>
);
