/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import middleware from "../middleware";
import reducer from "../reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import PollCreation from "../components/PollCreation";

describe("Render PollCreation", () => {
    let mockStore = "";
    let view = "";
    const spy = jest.spyOn(global.console, "error");
    
    beforeEach(() => {
        mockStore = createStore(reducer, middleware);
        view = render(
            <MemoryRouter>
                <Provider store={ mockStore }>
                    <PollCreation />
                </Provider>
            </MemoryRouter>
        );
    });

    it("will render PollCreation component", async () => {
        await expect(view).toMatchSnapshot();
    });

    
    it("will return to dashboard when submitted ", async () => {
        const testTextArea1 = screen.queryByTestId("test-textArea1");
        fireEvent.change(testTextArea1, {target: {value: "option 1 text"}});
        const testTextArea2 = screen.queryByTestId("test-textArea2");
        fireEvent.change(testTextArea2, {target: {value: "option 2 text"}});
        const testSubmitPollButton = screen.queryByTestId("test-submit-poll-btn");
        fireEvent.click(testSubmitPollButton);

        const userUrl = window.location.pathname;
        expect(userUrl).toEqual(`/`);
        expect(spy).not.toHaveBeenCalled();
    });
});