import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import sendSvg from './send-svg.svg';

function App() {

  const createMessage = () => {
    const wordLetters = ["The New AI", "above", "the technology", "where", "the use of tech", "Virtual", "and", "reality creative mind", "of possibilities", "Now", "new era", "pros and cons", ".", "AI", "leverage", "the computers", "to mimic", "the problem solving", "and", "decision making", "capabilities", "of", "human mind", ".","Systems", "that","thinks","like","human"];
    const text = [];
    let x = 9;
    while (--x) text.push(wordLetters[Math.floor(Math.random() * wordLetters.length)]);
    return text.join(" ");
  }

  const messageEl = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  useEffect(() => {
    const createDummyMessage = () => {
      setInterval(() => {
        setMessages(prevMessage => [...prevMessage, createMessage()]);
      }, 2500);
    }
    createDummyMessage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <h3>Infinite chat loop: React Chat App</h3>
      <div className="chat">
        <div className="head">Chat Loop</div>
        <div className="messages" ref={messageEl}>
          {messages.map((m, i) => <div key={i} className={`message${i % 2 !== 0 ? ' receiver' : ''}`}>{m}</div>)}
        </div>
        <div className="footer">
          <input type="text" placeholder="You message here..." />
          <img src={sendSvg} alt='send icon'/>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
