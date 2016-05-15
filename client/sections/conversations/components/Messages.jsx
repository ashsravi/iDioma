import React from 'react';
import Message from './Message.jsx';

const Messages = ({ messages }) => (
  <div className="message-section">
	  <div className="message-list">
	    {messages.map((message, i) => (
	      <Message key={i} message={message} />
	    ))}
	  </div>
  </div>
);

export default Messages;

// TODO Add heading for conversation participants?
