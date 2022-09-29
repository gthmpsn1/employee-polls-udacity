/**
* @jest-environment jsdom
*/

import middleware from "../middleware";
import reducer from "../reducers";
import { createStore } from "redux";
import "@testing-library/jest-dom";
import { _createPoll, _saveVote } from "../utils/_DATA";
import authedUser from "../reducers/authedUser";

describe("test how data interacts with database api", () => {
  let mockStore = "";
  let spy = "";

  beforeEach(() => {
    mockStore = createStore(reducer, middleware);
    spy = jest.spyOn(global.console, "error");
  });     

  it('when creating question, will return an error when invalid data is passed when creating a new poll', async() => { 
    const testInvalidData= {};
    const response = await _createPoll(testInvalidData);
    expect(spy).toHaveBeenCalled();
  }, 1000);

  it('when creating question, will return the the submitted data after it has been filtered from questions data', async() => { 
    const testData= {
      textArea1: "some text for one",
      textArea2: "some text for two",
      user: "sarahedo"
    };

    const response = await _createPoll(testData);
    const filteredResponse = Object.values(response).filter(question=>question.author === testData.user && question.optionOne.text === testData.textArea1 && question.optionTwo.text === testData.textArea2);
    expect(filteredResponse.length).toBe(1);
  }, 1000);

  it('when voting, will return an error if the voting data is invalid or missing', async() => { 
    const testInvalidData = {};
    const response = await _saveVote(testInvalidData);
    expect(spy).toHaveBeenCalled();
  }, 1000);

  it('when voting, will return true if the voting data is valid', async() => { 
    const testValidData = {
      vote: 1,
      authedUser: 'sarahedo',
      qID: 'vthrdm985a262al8qx3do'
    };
    const response = await _saveVote(testValidData);
    expect(response["vthrdm985a262al8qx3do"].optionOne.votes.includes(testValidData.authedUser)).toBeTruthy();
  }, 1000);
});