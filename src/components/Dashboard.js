import { connect } from "react-redux";
import Nav from "./Nav";
import QuestionCard from "./QuestionCard";

const Dashboard = (props) => {
    const expireTime = (Date.now() - 10368000000);
    const questions = Object.values(props.questions);
    const users = props.users;
    questions.sort((a,b) => b.timestamp - a.timestamp);
    const authedUser = props.authedUser;

    const hasVoted = (question) => {
        if (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="dashboard-container">
            <Nav />
            <h2>Dashboard</h2>
            <div className="dashboard">
                <div className="questions">
                    <div className="question-header">Current Polls</div>
                    <div className="legend">
                            <div className="legend-info">
                                <div className="legend-unanswered"></div>
                                <div className="legend-item-name">= NOT VOTED</div>
                            </div>
                            <div className="legend-info">
                                <div className="legend-answered"></div>
                                <div className="legend-item-name">= VOTED</div>
                            </div>
                        </div>
                    <div className="question-grid">
                        {questions.map((question) => (
                            question.timestamp > expireTime
                                && <QuestionCard key={question.id} hasVoted={hasVoted(question)} question={question} status={"open"} author={users[question.author].name} authedUser={authedUser} />
                        ))}
                    </div>
                </div>
                <div className="questions">
                    <div className="question-header">Archived Polls</div>
                    <p>Polls over than 120 days.</p>
                    <div className="question-grid">
                        {questions.map((question) => (
                            question.timestamp < expireTime
                                && <QuestionCard key={question.id} hasVoted={hasVoted(question)} question={question} status={"closed"} author={users[question.author].name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({questions, users, authedUser}) => ({
    questions: questions,
    users: users,
    authedUser: authedUser
})

export default connect(mapStateToProps)(Dashboard);