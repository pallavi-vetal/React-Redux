import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import { showMatches } from "../../actions/showActions";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount() {
  console.log("Invoke");
    this.props.showMatches();
  
  }
  
  render() {
    function MatchComponent(props) {
      const commentlist = props.matches.map((comment) => {
        return (
            <div>
                <br></br>
                <li key={comment.id}>{comment.comment}</li>
                <li key={comment.id}>-- {comment.author}, {comment.date}</li>
            </div>
        );
    });

    return (
        <div>
            <h4>Comments</h4>
            <ul className = "list-unstyled">
                {commentlist}
            </ul>
        </div>
    );
          
  }
    const { user } = this.props.auth;
    const { matches } = this.props.matches;
    console.log(matches);
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
           <MatchComponent props={matches}/>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  matches:PropTypes.object.isRequired,
  showMatches:PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  matches:state.matches
});

export default connect(
  mapStateToProps,
  { logoutUser,showMatches }
)(Dashboard);
