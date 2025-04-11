import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from "./components/Mynavbar";
import MyFooter from "./components/Footer";
import MyHome from "./components/Home";
import Previsioni from "./components/previsioni";
import Recensioni from "./components/Diconodinoi";
import NotFound from "./components/NotFound"; 

function App() {
  return (
    <BrowserRouter>
      <main className="d-flex flex-column min-vh-100 bg-info">
        <MyNavbar />
        <div className="flex-grow-1">
          

          <Routes>
            {/* Rotta dinamica per le previsioni */}
            <Route path="/" element={<MyHome/>} />
            <Route path="/previsioni" element={<Previsioni />} />
            <Route path="/recensioni" element={<Recensioni />} />
            <Route path="/previsioni/:cityName" element={<Previsioni />} />

            
            {/* Rotta di fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <MyFooter />
      </main>
    </BrowserRouter>
  );
}

export default App;
