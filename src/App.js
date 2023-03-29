import NavBar from "./pages/navbar/NavBar";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Banner from "./pages/bannerpage/Banner";
import BackGround from "./pages/backgroundpage/BackGround";
import Gallery from "./pages/gallerypage/Gallery";
import Footer from "./pages/footer/Footer";
import CardsIteration from "./pages/cardspage/CardsIteration";


function App() {
  return (
    <div className="App">
        
      <BrowserRouter>
        <NavBar/>
        <Banner/>
        <BackGround/> 
        <CardsIteration/>
        {/* <Gallery/> */}
        <Footer/>
        <Routes>
            <Route></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
