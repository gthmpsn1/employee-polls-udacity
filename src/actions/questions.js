import { saveVote, createPoll } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SUBMIT_VOTE = "SUBMIT_VOTE";
export const CREATE_POLL = "CREATE_POLL";

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function createVote (info) {
    return {
        type: SUBMIT_VOTE,
        info
    }
};

export function handleVote(info) {
    return (dispatch) => {
        return dispatch(createVote(saveVote(info)))
    }
}

function pollInfo (info) {
    return {
        type: CREATE_POLL,
        info
    }
}

export function handleCreatePoll(info) {
    return (dispatch) => {
        return createPoll(info)
            .then((newQuestions) => dispatch(pollInfo(newQuestions)))
    }
}