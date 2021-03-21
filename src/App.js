import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Talent from "./component/Talent";
import Brands from "./component/Brands";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={() => <Home />} />
        <Route path="/home" component={() => <Home />} />
        <Route path="/talent" component={() => <Talent />} />
        <Route path="/brands" component={() => <Brands />} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
