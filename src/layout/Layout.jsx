// import React from 'react';

import Footer from "../footer/Footer";
// import Info from "../information/Info";
import Navbar from "../navbar/Navbar";

import { Outlet } from 'react-router-dom'; 
export default function Layout() {
    return<>
    <Navbar/>
    <Outlet></Outlet>
    {/* <Info/> */}
    <Footer />
    </>
}