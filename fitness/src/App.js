import React from "react";

//to route home page and exercise detail page
import {Route,Routes} from 'react-router-dom';

import {Box} from '@mui/material';
import './App.css';
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () =>{
    return (
        <Box width="400px"  sx={{width:{x1:'1488px'}}} m="auto">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* to change the id dynamically */}
                <Route path="/exercise/:id"  element={<ExerciseDetail />} /> 

            </Routes>
           <Footer/> 
        </Box>
    )
}

export default App