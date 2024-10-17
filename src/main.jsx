import { BrowserRouter, Routes , Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import  Header from "./components/Header";
import  {Home} from "./pages/Home/Home";
import  {Footer} from "./components/Footer/Footer";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
      <Routes>
     
        <Route path="/" element={<Home />} />
      
      
      </Routes>
    <Footer />
  </BrowserRouter>
)
