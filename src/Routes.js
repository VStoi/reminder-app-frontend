import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {ROUTING} from "./routingInfo"
import {PrivateRoute} from "./helpers/PrivateRoute";
import {isAuth} from "./helpers/isAuth";


export const routing = () => {
    return(
        <Router>
            <Switch>
                <Route path={ROUTING.SIGN_IN.path}>
                    <ROUTING.SIGN_IN.component />
                </Route>
                <Route path={ROUTING.SIGN_UP.path}>
                    <ROUTING.SIGN_UP.component />
                </Route>
                <PrivateRoute routeGuards={isAuth()} path={"/"} redirectTo={"/ss"} component={ROUTING.SIGN_UP.component}/>
            </Switch>
        </Router>
    )
}