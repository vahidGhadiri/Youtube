import React from "react"
import {Route, Switch, withRouter} from "react-router-dom";

import {HomeView} from "../views";


const App: React.FunctionComponent = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={HomeView}/>
            </Switch>
        </>
    )
}

export default withRouter(App)