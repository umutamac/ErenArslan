import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

function App() {
    return (
        <Router /*basename="/Portfolio"*/>
            <div id="routerDiv">
                <Nav />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NoMatch} />
                </Switch>

                <Footer />
            </div>
        </Router>
    );
}

export default App;