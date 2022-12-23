import { useState } from 'react';
import './App.css';


function App() {
  const [left, setLeft] = useState(55);
  const [top, setTop] = useState(37);
  const [title, setTitle] = useState('Are You Dumb ?')
  const [hideBtns, setHideBtns] = useState('block')

  const noClickHandler = () => {
    setLeft(Math.floor(Math.random() * 91))
    setTop(Math.floor(Math.random() * 91))
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <button style={{ left: '35vw', top: '37vh', position: 'absolute', outline: 'none', width: '10vw', height: '11vh', fontSize: '3vw', display: hideBtns }} onClick={ () => {
        setTitle('I Knew It :3')
        setHideBtns('none')
      } } >Yes</button>
      <button className='btn' style={{ left: left+'vw', top: top+'vh', position: 'absolute', outline: 'none', display: hideBtns }} onClick={noClickHandler}>No</button>
    </div>
  );
}

export default App;
