import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from "./components/Mynavbar";
import MyFooter from "./components/Footer";
import MyHome from "./components/Home";
function App() {


  return (
    <BrowserRouter>
 <main className="d-flex flex-column min-vh-100 bg-info ">
          <MyNavbar />
          <div className="flex-grow-1">
            <MyHome/>
      </div>
      <MyFooter/>
    </main>
    </BrowserRouter>
  )
}

export default App
