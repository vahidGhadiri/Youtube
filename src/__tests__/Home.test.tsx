import React from "react"
import {shallow} from "enzyme";
import {findByTestAttr} from "../utils/helper";
import {HomePresentation} from "../pages";
import {HomeProps} from "../containers/pages/Home/Home.container";


const setup = (props: HomeProps = {}) => {
    return shallow(<HomePresentation {...props}/>)
}


describe("Home Component", () => {
    let component = {};
    beforeEach(() => {
        component = setup()
    })

    test("it renders correctly", () => {
        const element = findByTestAttr(component, "home-component")
        expect(element.length).toEqual(1)
    })


})