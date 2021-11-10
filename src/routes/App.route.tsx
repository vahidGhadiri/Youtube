import React from "react"
import {Route, Switch, withRouter} from "react-router-dom";

import {HomePage} from "../pages";


const App: React.FunctionComponent = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={HomePage}/>
            </Switch>
        </>
    )
}

export default withRouter(App)