import { Link } from "react-router-dom";

const QuestionCard = ({question, status, author, hasVoted}) => {
    const timestamp = new Date(question.timestamp);

    if (status === "open") { 
        return (
            <div className="question-card-container">
                <div>{author}</div>
                <div>{timestamp.toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric"})}</div>
                <Link to={`/poll/${status}/${question.id}`} >
                    {hasVoted ? <div className="show-has-voted-poll-btn">Show Poll</div> : <div className="show-poll-btn">Show Poll</div> }
                </Link>
                <div>{`Total Votes: ${question.optionOne.votes.length + question.optionTwo.votes.length}`}</div>
            </div>
        ) 
    } else {
        return (
            <div className="question-card-container">
                <div>{author}</div>
                <div>{timestamp.toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric"})}</div>
                <Link to={`/poll/${status}/${question.id}`} ><div className="show-closed-poll-btn">Show Poll</div></Link>
                <div>{`Total Votes: ${question.optionOne.votes.length + question.optionTwo.votes.length}`}</div>
            </div>
        )
    }
}

export default QuestionCard; 