import { RECEIVE_QUESTIONS, SUBMIT_VOTE, CREATE_POLL } from "../actions/questions"; 

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SUBMIT_VOTE:
            return {
                ...state,
                ...action.info
            }
        case CREATE_POLL:
            return {
                ...state,
                ...action.info
            }
        default:
            return state;
    }
}