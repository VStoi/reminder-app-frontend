import React from "react";
import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({routeGuards, redirectTo, ...rest}) => {
    if (!routeGuards){
        return (<Redirect to={redirectTo} />)
    }
    return (<Route {...rest} />)
}