import './App.css';
import { useState } from 'react';


function App() {

  const [actions, setActions] = useState(null);
  const onHandleAction = (actions) => {
    setActions({ ...actions });
  }

  return (
    <div className="App">
      <div className="App-container">
        <button onClick={() => onHandleAction({ scan: 'scanning', write: null })} className="btn">Scan</button>
      </div>
    </div>
  );
}

export default App;
