import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Orders from "components/Orders";
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

                <Route path="/orders" exact>
                    <Orders/>
                </Route>

            </Switch>

            <Footer/>
        </BrowserRouter>
    );
}

export default Routes;