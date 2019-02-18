import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const MessageItem = ({ 
  date, 
  username, 
  profileImageUrl, 
  text, 
  removeMessage,
  isCurrentUser
}) => (
  <div>
    <li className="list-group-item">
      <img 
          src={profileImageUrl || DefaultProfileImg} 
          alt={username}
          height="100"
          width="100"
          className="timeline-img"
      />
      <div className="message-area">
        <Link to="/">@{username} &nbsp; </Link>
        <span className="text-muted">
          <Moment className="text-muted" format="Do MMM YYYY">
            {date}
          </Moment>
        </span>
        <p>{text}</p>
        {isCurrentUser && (
          <button 
            onClick={removeMessage} 
            className="btn btn-danger">
            Remove
          </button>
        )}
      </div>
    </li>
  </div>
);

export default MessageItem;