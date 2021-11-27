import React from "react"

import {HomeProps} from "../../containers/pages/Home/Home.container";
import {HeaderPresentation, SidebarPresentation} from "../../components";

import {Layout, Main} from "./Home.style";


const HomePresentation: React.FunctionComponent<HomeProps> = ({onGetId}) => {
    return (
        <Layout data-test="home-component">
            <SidebarPresentation/>
            <Main>
                <HeaderPresentation/>
            </Main>

        </Layout>
    )
}

export default HomePresentation