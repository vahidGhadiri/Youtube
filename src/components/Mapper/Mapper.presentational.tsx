import React, {FC} from "react"
import {Container, List} from "./Mapper.style";
import {SidebarInterface} from "../../config/interfaces.config";


export interface PropsInterface {
    data: SidebarInterface[],
    hasBorder?: boolean | undefined,
    title?: string | undefined
}

const MapperPresentation: FC<PropsInterface> = ({data, hasBorder, title}): JSX.Element => {
    return (
        <Container hasBorder={hasBorder}>
            <p>{title}</p>
            {data.map((item, index) => (
                <List key={index}>
                    {item.icon
                        ? <span>{item.icon}</span>
                        : <img src={item.image} alt="Channel icon"/>
                    }
                    <span>{item.name}</span>
                </List>
            ))}
        </Container>
    )
}

export default MapperPresentation