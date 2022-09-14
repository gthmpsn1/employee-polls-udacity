import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";


export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions, id}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(setAuthedUser(null));
            })
    }
}