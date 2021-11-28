import React, {FC} from "react"
import {Container, List} from "./Mapper.style";
import {SidebarInterface} from "../../config/interfaces.config";


export interface PropsInterface {
    data: SidebarInterface[],
    hasBorder?: boolean | undefined
}

const MapperPresentation: FC<PropsInterface> = ({data, hasBorder}): JSX.Element => {
    return (
        <Container hasBorder={hasBorder}>
            {data.map((item, index) => (
                <List key={index}>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                </List>
            ))}
        </Container>
    )
}

export default MapperPresentation