import React, {FC} from "react"
import {Container} from "./Sidebar.style";
import {MapperPresentation} from "../index";
import {SIDEBAR_MORE, SIDEBAR_PRIMARY, SIDEBAR_SECONDARY, SIDEBAR_SUBSCRIPTION} from "../../config/data";


const SidebarPresentation: FC = (): JSX.Element => {
    return (
        <Container>
            <div style={{marginBottom: "80px"}}>LOGO</div>
            <MapperPresentation data={SIDEBAR_PRIMARY.slice()} hasBorder={true}/>
            <MapperPresentation data={SIDEBAR_SECONDARY}/>
            <MapperPresentation data={SIDEBAR_SUBSCRIPTION} title="subscriptions"/>
            <MapperPresentation data={SIDEBAR_MORE} title="more from youtube"/>
        </Container>
    )
}

export default SidebarPresentation