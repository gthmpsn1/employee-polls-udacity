import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleVote } from "../actions/questions";
import { useState, useEffect } from "react";
import Nav from "./Nav";

const PollPage = (props) => {
    const questionID = useParams();
    const questions = Object.values(props.questions);
    const question = questions.find((q) => q.id === questionID.id)
    const authedUser = props.authedUser;
    const users = props.users;
    const dispatch = props.dispatch;

    const [didVote1, setDidVote1] = useState({});
    const [didVote2, setDidVote2] = useState({});
    const [optionOnePercentage, setOptionOnePercentage] = useState("");
    const [optionTwoPercentage, setOptionTwoPercentage] = useState("");

    useEffect(() => {
        setDidVote1(question.optionOne.votes.includes(authedUser))
        setDidVote2(question.optionTwo.votes.includes(authedUser))
        let totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
        setOptionOnePercentage((question.optionOne.votes.length/totalVotes*100).toFixed(1));
        setOptionTwoPercentage((question.optionTwo.votes.length/totalVotes*100).toFixed(1));
    }, [didVote1, didVote2])

    const castVoteForOne = (e) => {
        e.preventDefault();
        const vote = 1;
        recordVote(vote);
        setDidVote1(true);
    }
    const castVoteForTwo = (e) => {
        e.preventDefault();
        const vote = 2;
        recordVote(vote);
        setDidVote2(true);
    }

    const recordVote = (vote) => {
        let info = {
            authedUser: authedUser,
            vote: vote,
            qID: questionID.id
        }
        dispatch(handleVote(info))
    }

    return (
        <div className="poll-page-container">
            <Nav />
            <div className="poll-info">
                <h5>Poll by {users[question.author].name}</h5>
                <div className="poll-owner-image" style={{backgroundImage: `url(${users[question.author].avatarURL})`}}></div>
                <h3>Would you rather...</h3>
                <div className="option-container">
                    <form className={didVote1 === true ? "highlight-vote" : "poll-option"}>
                        <h2>Option #1</h2>
                        <label>
                            <div>{question.optionOne.text}</div>
                        </label>
                            {didVote1 || didVote2
                                ? <div>
                                    <p>{`Votes: ${question.optionOne.votes.length} (${optionOnePercentage}%)`}</p>
                                </div>
                                : <input onClick={castVoteForOne} defaultValue="Vote for Option #1" />}
                    </form>
                    <form className={didVote2 === true ? "highlight-vote" : "poll-option"}>
                        <h2>Option #2</h2>
                        <label>
                            <div>{question.optionTwo.text}</div>
                        </label>
                            {didVote1 || didVote2
                                ? <div>
                                    <p>{`Votes: ${question.optionTwo.votes.length} (${optionTwoPercentage}%)`}</p>
                                </div>
                                : <input onClick={castVoteForTwo} defaultValue="Vote for Option #2" />
                            }
                    </form> 
                </div>
                {didVote1 || didVote2
                    ? didVote1 ? <p>You voted for Option #1</p> : <p>You voted for Option #2</p>
                    : null
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({questions, authedUser, dispatch, users}) => ({
    questions: questions,
    authedUser: authedUser,
    dispatch: dispatch,
    loading: authedUser === null,
    users: users
})

export default connect(mapStateToProps)(PollPage);