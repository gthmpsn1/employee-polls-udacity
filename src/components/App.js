import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {handleInitialData} from "../actions/shared"; 
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import PollCreation from "./PollCreation";
import PollPage from "./PollPage";
import NotFound from "./NotFound";
import Nav from "./Nav";

const App = (props) => {
  const isLoggedIn = props.isLoggedIn;

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
      <Fragment>
        <div className="app-container">
          <Nav />
          {isLoggedIn !== true 
            ? (<Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>)
            : (<Routes>
              <Route path="*" element={<NotFound />} />
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/add" element={<PollCreation />} />
              <Route path="/questions/:id" element={<PollPage />} />
            </Routes>)
          }
        </div>
      </Fragment>
  )
};

const mapStateToProps = ({authedUser}) => ({
  isLoggedIn: authedUser !== null,
});
  
export default connect(mapStateToProps)(App);