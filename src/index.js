import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import Acceuil from './pages/Acceuil';
import Services from './pages/Services';
import Projets from './pages/Projets';
import Contact from './pages/Contactme';
import Competences from './pages/Competences';
import Error404 from './components/error/Error404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Acceuil />,
    errorElement:<Error404 />,
  },
  
  
  {
    path: "/acceuil",
    element:<Acceuil/>,
   
  },
  {
    path: "/contact",
    element: <Contact/>,
   
  },
  {
    path: "/services",
    element:  <Services/>,
   
  },
  {
    path: "/competences",
    element:  <Competences/>,
   
  },
  
    {
      path: "/projets",
      element: <Projets /> 
    }
    
  
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);


