import NavBar from "./pages/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Banner from "./pages/bannerpage/Banner";
//import BackGround from "./pages/gallerypage/Gallery";
import Footer from "./pages/footerpage/Footer";
//import CardsIteration from "./pages/contactpage/Contact";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <HomePage />
        <Footer />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
