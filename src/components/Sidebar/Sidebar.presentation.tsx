import React, {FC} from "react"
import {Container} from "./Sidebar.style";
import {MapperPresentation} from "../index";
import {SIDEBAR_PRIMARY, SIDEBAR_SECONDARY} from "../../config/data";


const SidebarPresentation: FC = (): JSX.Element => {
    return (
        <Container>
            <div style={{marginBottom:"100px"}}></div>
            <MapperPresentation data={SIDEBAR_PRIMARY} hasBorder={true}/>
            <MapperPresentation data={SIDEBAR_SECONDARY}/>
        </Container>
    )
}

export default SidebarPresentation