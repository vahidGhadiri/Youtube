import React from "react"
import {
    Container,
    GridIcon,
    IconContainer,
    Input,
    MicrophoneIcon,
    NotificationIcon,
    PlusIcon,
    SearchContainer
} from "./Header.style";

export const HeaderPresentation = () => {
    return (
        <Container>
            <SearchContainer>
                <MicrophoneIcon/>
                <Input type="text" placeholder="Type to search"/>
            </SearchContainer>
            <IconContainer>
                <PlusIcon/>
                <GridIcon/>
                <NotificationIcon/>
            </IconContainer>
        </Container>
    )
}

export default HeaderPresentation