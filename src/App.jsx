// import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import About from './AboutComp/About';
import Contact from './contact-us/Contact';
import { HelmetProvider  } from 'react-helmet-async';


import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Portofolio from './portofolio/Portofolio';
import NotFoundCompo from './NotFoundCom/NotFoundCompo';


library.add(fab);

const routers= createBrowserRouter([
  {path: '', element: <Layout />,errorElement:<NotFoundCompo />,children:[
    {index: true, element: <Home />},
  {path: 'about', element: <About />},
  {path: 'contact', element: <Contact /> },
  {path: 'portofolio', element: <Portofolio /> }

]}
  
],
{ basename: '/react-1' } 
)
export default function App() {
  return <>
  <HelmetProvider>
  <RouterProvider router={routers}/>
  </HelmetProvider>
  </>

  
}




