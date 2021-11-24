import React from "react"
import {shallow} from "enzyme";
import {findByTestAttr} from "../utils/helper";
import {HomePresentation} from "../pages";

const setup = (props = {}) => {
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