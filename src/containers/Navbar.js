import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../images/warbler-logo.png';
import { logout } from '../store/actions/auth';

class Navbar extends Component {

  logout = e => {
    e.preventDefault();
    this.props.logout();
  }
  
  render() {
    const { currentUser } = this.props;
    return(
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Warbler" />
          </Link>
          </div>
          {!currentUser.isAuthenticated && (
            <ul className="nav navbar-nav ml-auto">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </ul>
          )}
          {currentUser.isAuthenticated && (
            <ul className="nav navbar-nav ml-auto">
              <li>
                <Link to={`/users/${currentUser.user.id}/messages/new`}>
                  New Message
                </Link>
              </li>  
              <li>
                <a onClick={this.logout}>Log Out</a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {logout})(Navbar);