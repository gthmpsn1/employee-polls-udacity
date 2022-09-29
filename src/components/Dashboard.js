import { connect } from "react-redux";
import Nav from "./Nav";
import QuestionCard from "./QuestionCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Dashboard = (props) => {
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
        <div data-testid={'test-dashboard-component'} className="dashboard-container">
            <Nav />
            <h2>Dashboard</h2>
            <div className="dashboard">
                <div className="questions">
                    <Tabs>
                        <TabList>
                            <Tab>Unanswered</Tab>
                            <Tab>Answered</Tab>
                        </TabList>
                        <TabPanel>
                            <h2>Unanswered Polls</h2>
                            <div className="question-grid">
                                {questions.map((question) => (
                                    !hasVoted(question)
                                        && <QuestionCard key={question.id} question={question} author={users[question.author].name} authedUser={authedUser} />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Answered Polls</h2>
                            <div className="question-grid">
                                {questions.map((question) => (
                                    hasVoted(question)
                                        && <QuestionCard key={question.id} question={question} author={users[question.author].name} authedUser={authedUser} />
                                ))}
                            </div>
                        </TabPanel>
                    </Tabs>
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