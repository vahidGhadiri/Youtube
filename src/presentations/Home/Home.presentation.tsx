import React from "react"

const HomePresentation: React.FunctionComponent<any> = ({onDownload}) => {

    return (
        <div onClick={() => onDownload("vahid")}>
            <h1>Youtube Home page</h1>
        </div>
    )
}

export default HomePresentation