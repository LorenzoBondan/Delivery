import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar/>

            <Switch>

                <Route path="/" exact>
                    <Home/>
                </Route>

                <Route path="/products" exact>
                    <Home/>
                </Route>

            </Switch>

            <Footer/>
        </BrowserRouter>
    );
}

export default Routes;