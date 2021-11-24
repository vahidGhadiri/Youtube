import React from "react"
import {SidebarPresentation} from "../../components";
import {HomeProps} from "../../containers/pages/Home/Home.container";


const HomePresentation: React.FunctionComponent<HomeProps> = ({onGetId, onGetValue}) => {
    return (
        <div data-test="home-component">
            <h1>Youtube Home page</h1>
            <button onClick={() => onGetId(1)}>id</button>
            <button onClick={() => onGetValue("vahid")}>value</button>
            <SidebarPresentation/>
        </div>
    )
}

export default HomePresentation