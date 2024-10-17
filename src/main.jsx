import { BrowserRouter, Routes } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import  Header from "./components/Header";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
      <Routes>

      
      </Routes>
  </BrowserRouter>
)
