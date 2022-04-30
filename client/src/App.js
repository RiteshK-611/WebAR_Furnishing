import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import DetailView from "./components/product/DetailView";
import ARView from "./components/webar/ARView";

import { Box } from "@material-ui/core";
import TemplateProvider from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
// import Footer from './components/footer/Footer';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter basename="/">
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Routes>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/product/:id" component={DetailView} />
              <Route exact path="/product/ar/:id" component={ARView} />
            </Routes>
          </Box>
          {/* <Footer />   */}
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
