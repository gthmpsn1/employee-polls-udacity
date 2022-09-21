/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import middleware from "../middleware";
import reducer from "../reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Dashboard from "../components/Dashboard";

describe("Render Dashboard", () => {
    let mockStore = createStore(reducer, middleware);

    it("will match the snapshot", async () => {
        let view = render(
            <MemoryRouter>
                <Provider store={ mockStore }>
                    <Dashboard />
                </Provider>
            </MemoryRouter>
        );

        await expect(view).toMatchSnapshot();
    });
});