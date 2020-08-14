import React from "react";
import {
    Router,
    Switch,
    Route
} from "react-router-dom";
import {ROUTING} from "./routingInfo"
import history from "./services/history";
import {PrivateRoute} from "./helpers/PrivateRoute";
import {isAuth} from "./helpers/isAuth";


export const routing = () => {
    return(
        <Router history={history}>
            <Switch>
                <Route exact path={ROUTING.SIGN_UP.path}>
                    <ROUTING.SIGN_UP.component/>
                </Route>
                <PrivateRoute
                    routeGuards={!isAuth()}
                    path={ROUTING.SIGN_IN.path}
                    redirectTo={"/app"}
                    component={ROUTING.SIGN_IN.component}
                />
            </Switch>
        </Router>
    )
};