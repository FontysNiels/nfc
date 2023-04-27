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
        vers less
        <button onClick={() => onHandleAction({ scan: 'scanning' })} className="btn">Scan</button>
      </div>
    </div>
  );
}

export default App;
