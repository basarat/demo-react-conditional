import React, { useState } from 'react';
import './App.css';
import { db } from './lyrics';

function App() {
  const [messages, setMessages]
    = useState<string[]>(['Never gonna give you up']);
  const addMessage = () =>
    setMessages([...messages, db[messages.length]]);
  const removeMessage = () =>
    setMessages(messages.slice(0, messages.length - 1));
  return (
    <div className="App">
      <div>
        <button onClick={addMessage}>Add</button>
        <button onClick={removeMessage}>Remove</button>
      </div>
      {!!messages.length && <ul>
        {messages.map(message => <li>{message}</li>)}
      </ul>}
    </div>
  );
}

export default App;
