import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Talent from "./component/Talent";
import Brands from "./component/Brands";
import Creative from "./component/Creative";
import NavbarExt from "./component/Navbar";
import Services from "./component/Services";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Header />
        <Route exact path="/" component={() => <Home />} />
        <Route path="/home" component={() => <Home />} />
        <Route path="/talent" component={() => <Talent />} />
        <Route path="/brands" component={() => <Brands />} />
        <Footer />
      </BrowserRouter> */}
      <BrowserRouter>
        <Route exact path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/home">
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/talent">
          <Header />
          <Talent />
          <Footer />
        </Route>
        <Route path="/brands">
          <Header />
          <Brands />
          <Footer />
        </Route>
        <Route path="/service">
          <NavbarExt />
          <Creative />
          <Services />
          <Footer />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
