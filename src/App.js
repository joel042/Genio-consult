import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import OurServicesPage from "./Components/Pages/OurServicesPage";


function App() {
  return (
    <BrowserRouter>
      <div className=" min-h-screen flex flex-col">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/OurServices" element={<OurServices />} /> */}
          <Route exact path="/OurServicesPage" element={<OurServicesPage />} />
        </Routes>
  
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
