import { BrowserRouter, Routes } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import  Header from "./components/Header";
import  {Footer} from "./components/Footer/Footer";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
      <Routes>

      
      </Routes>
    <Footer />
  </BrowserRouter>
)
