import React from "react"
import {Route, Switch, withRouter} from "react-router-dom";
import HomeContainer from "../containers/Home/Home.container";


const App: React.FunctionComponent = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={HomeContainer}/>
            </Switch>
        </>
    )
}

export default withRouter(App)