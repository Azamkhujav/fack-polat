import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/header.js";
import Footer from "./containers/footer.js";
import Resource from "./pages/resource.js";
import About from "./pages/about.js";
import Commerical from "./pages/coomerical.js";
import Questions from "./pages/questions.js";
import Members from "./pages/members.js";
import Career from "./pages/career";
import ServicePage from "./pages/service.jsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/commerical" element={<Commerical />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/members" element={<Members />} />
        <Route path="/career" element={<Career />} />
        <Route path="/service/:id" element={<ServicePage />} />
        <Route path="/resource" element={<Resource />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
