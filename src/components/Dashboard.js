import { connect } from "react-redux";
import Nav from "./Nav";
import QuestionCard from "./QuestionCard";

const Dashboard = (props) => {
    const expireTime = (Date.now() - 31556926000);
    const questions = Object.values(props.questions);
    const users = props.users;

    return (
        <div className="dashboard-container">
            <Nav />
            <h2>Dashboard</h2>
            <div className="dashboard">
                <div className="questions">
                    <div className="question-header">Current Polls</div>
                    <div className="question-grid">
                        {questions.map((question) => (
                            question.timestamp > expireTime
                                && <QuestionCard key={question.id} question={question} status={"open"} author={users[question.author].name} />
                        ))}
                    </div>
                </div>
                <div className="questions">
                    <div className="question-header">Archived Polls</div>
                    <div className="question-grid">
                        {questions.map((question) => (
                            question.timestamp < expireTime
                                && <QuestionCard key={question.id} question={question} status={"closed"} author={users[question.author].name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({questions, users}) => ({
    questions: questions,
    users: users
})

export default connect(mapStateToProps)(Dashboard);