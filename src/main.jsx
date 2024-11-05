import { BrowserRouter, Routes , Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import  Header from "./components/Header";
import  Home from "./pages/Home";
import  Footer from "./components/Footer";
import  About from "./pages/About";
import  Error from "./pages/Error";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error />} />
      
      
      </Routes>
    <Footer />
  </BrowserRouter>
)
