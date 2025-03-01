import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./components/Navbar/Nav";
import Sidebar from "./components/Sidebar";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (

        <BrowserRouter>

            <Navbar toggle={toggle}/>

            <Sidebar isOpen={isOpen} toggle={toggle}/>

            <AnimatedRoutes />

        </BrowserRouter>

    );
}


export default App;
