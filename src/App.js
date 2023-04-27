import nfc from './nfc.svg';
import './App.css';
import Scan from './containers/Scan';
import { useState } from 'react';
import { ActionsContext } from './contexts/context';

function App() {

  const [actions, setActions] = useState(null);
  const {scan, write} = actions || {};

  const actionsValue = {actions,setActions};

  const onHandleAction = (actions) =>{
    setActions({...actions});
  }

  return (
      <div className="App">
        <img src={nfc} className="App-logo" alt="logo" />
        <h1>NFC Tool</h1>
        <div className="App-container">
          <button onClick={()=>onHandleAction({scan: 'scanning'})} className="btn">Scan</button>
          <button onClick={()=>onHandleAction({scan: null})} className="btn">Write</button>
        </div>
        <p>Version Less.</p>
        <ActionsContext.Provider value={actionsValue}>
          {scan && <Scan/>}

        </ActionsContext.Provider>
      </div>
  );
}

export default App;
