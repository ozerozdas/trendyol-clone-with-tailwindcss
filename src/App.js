import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        
        <Switch>
          <Route path="/" exact>
            <Content name="homepage" />
          </Route>
          <Route path="/contact">
            <Content name="contact" />
          </Route>
          <Route path="/account">
            <Content name="account" />
          </Route>
          <Route path="/favorites">
            <Content name="favorites" />
          </Route>
          <Route path="/basket">
            <Content name="basket" />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
