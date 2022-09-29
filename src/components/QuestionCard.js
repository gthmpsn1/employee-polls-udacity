import { Link } from "react-router-dom";

const QuestionCard = ({question, author}) => {
    const timestamp = new Date(question.timestamp);

    return (
        <div className="question-card-container">
            <div>{author}</div>
            <div>{timestamp.toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric"})}</div>
            <Link to={`/questions/${question.id}`} >
                <div data-testid={'TEST-SHOW-POLL'} className="show-poll-btn">Show Poll</div>
            </Link>
            <div>{`Total Votes: ${question?.optionOne?.votes?.length + question?.optionTwo?.votes?.length}`}</div>
        </div>
    ) 
}

export default QuestionCard; 