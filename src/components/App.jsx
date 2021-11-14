import {  useState } from 'react'; 
import logo from '../images/logo.svg';
import './App.css';
import  Message from './Message';

function App() {
//  const stName="Igor";
  const [value, setValue] = useState('');
  function handleChange(event) {
    setValue(event.target.value);
	}	
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
            <input value= {value} onChange={handleChange} placeholder="Введите ваше имя" className="App-input"  />
            <Message messName={value} className="App-message"/>
        {/* <Message messName={(value) ? value : stName}/> */}
      </header>
    </div>
  );
}

export default App;
