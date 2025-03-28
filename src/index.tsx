import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import CloudSolutions from "./pages/CloudSolutions";
import CyberSecurity from "./pages/CyberSecurity";
import Networking from "./pages/Networking";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import About from "./pages/About";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/cloud" element={<CloudSolutions />} />
                <Route path="/security" element={<CyberSecurity />} />
                <Route path="/networking" element={<Networking />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
