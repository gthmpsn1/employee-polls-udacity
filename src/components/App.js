import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {handleInitialData} from "../actions/shared"; 
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import PollCreation from "./PollCreation";
import PollPage from "./PollPage";

const App = (props) => {
  const loggedIn = true;

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
      <Fragment>
        <div className="app-container">
          {props.loading === true ? <p>Loading...</p> : (
            <Routes>
              <Route exact path="/" element={!loggedIn ? <Navigate to="/login" /> : <Dashboard />} />
              <Route path="/leaderboard" element={!loggedIn ? <Navigate to="/login" /> : <Leaderboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/new-poll" element={!loggedIn ? <Navigate to="/login" /> : <PollCreation />} />
              <Route path="/poll/:status/:id" element={!loggedIn ? <Navigate to="/login" /> : <PollPage />} />
            </Routes>
          )}
        </div>
      </Fragment>
  )
};

const mapStateToProps = ({authedUser}) => ({
  loading: authedUser === null,
});
  
export default connect(mapStateToProps)(App);