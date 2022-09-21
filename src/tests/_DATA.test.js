/**
* @jest-environment jsdom
*/

import middleware from "../middleware";
import reducer from "../reducers";
import { createStore } from "redux";
import "@testing-library/jest-dom";
import { _createPoll } from "../utils/_DATA";

describe("test how data interacts with database api", () => {
  let mockStore = "";
  const spy = jest.spyOn(global.console, "error");

  beforeEach(() => {
    mockStore = createStore(reducer, middleware);
  });     

  it('will return an error if the data is empty for creating a new poll', async() => { 
    const testInvalidData= {};

    await _createPoll(testInvalidData).catch(error => error);
    expect(spy).toHaveBeenCalled();
  }, 1000);

  it('will return a formatted poll object', async() => { 
    const testData= {
      textArea1: "some text for one",
      textArea2: "some text for two",
      user: "sarahedo"
    };

    const response = await _createPoll(testData)
    console.log(response)
  }, 1000);
});