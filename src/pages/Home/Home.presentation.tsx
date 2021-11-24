import React from "react"
import {SidebarPresentation} from "../../components";


interface Props {
    onDownload(id: number): void
}

const HomePresentation: React.FunctionComponent<Props> = ({onDownload}) => {
    return (
        <div data-test="home-component">
            <h1>Youtube Home page</h1>
            <button onClick={() => onDownload(1)}>Sample</button>
            <SidebarPresentation/>
        </div>
    )
}

export default HomePresentation