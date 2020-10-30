import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import Products from "./components/pages/Products.js";
import Services from "./components/pages/Services.js";
import SignUp from "./components/pages/SignUp.js";
import { Footer } from "./components/Footer.js";
import "./App.css";

function App() {
    return (
        <Router>
            <>
                <Navbar />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/products" exact component={Products} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/sign-up" exact component={SignUp} />
                </Switch>

                <Footer />
            </>
        </Router>
    );
}

export default App;
