import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import main from "./main";
import about from "./about";
import bag from "./bag";
import Order from "./Order";
import Address from "./Address";
import Buy from "./buy";
import Success from "./Success";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path={"/"} component={main}/>
                <Route exact path={"/about"} component={about}/>
                <Route exact path={"/bag"} component={bag}/>
                <Route exact path={"/account"} component={Order}/>
                <Route exact path={"/address"} component={Address}/>
                <Route exact path={"/buy"} component={Buy}/>
                <Route exact path={"/success"} component={Success}/>
            </BrowserRouter>
        );
    }
}

export default App;
