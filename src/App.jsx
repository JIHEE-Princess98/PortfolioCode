import './style/App.css'
import {Route, Routes} from "react-router-dom";
import DashBoard from "./view/DashBoard.jsx";
import {darkTheme} from "./config/theme.js";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import {ThemeProvider} from "@mui/material/styles";
function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
        <Routes>
            <Route path="/" element={<DashBoard/>}/>
        </Routes>
        </ThemeProvider>
    )
}

export default App
