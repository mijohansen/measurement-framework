import MeasurementFramework, {userTrail} from "../index"

describe("dummy test", function () {
    // The 'it' function of Jasmine defined an individual tests. The first argument is
    // a description of the tests that's appended to the module name. Because a module name
    // is typically a noun, like the name of the function being tested, the description for
    // an individual tests is typically written in an action-data format.

    it("dummy test script", function () {
        userTrail()
        MeasurementFramework.init()
        console.log(window.dataLayer)
        // Check the results; "expect" and toEqual are Jasmine methods.
        expect("Maria").toEqual("Maria")
    })
})