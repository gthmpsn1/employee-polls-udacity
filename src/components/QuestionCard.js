import { Link } from "react-router-dom";

const QuestionCard = ({question, status, author}) => {
    const timestamp = new Date(question.timestamp);

    return (
        <div className="question-card-container">
            <div>{author}</div>
            <div>{timestamp.toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric"})}</div>
            <Link to={`/poll/${status}/${question.id}`} ><div className="show-poll-btn">Show Poll</div></Link>
            <div>{`Total Votes: ${question.optionOne.votes.length + question.optionTwo.votes.length}`}</div>
        </div>
    )
}

export default QuestionCard;