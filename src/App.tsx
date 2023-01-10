import React, { useState, useEffect , useRef} from 'react';

import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub } from './types/Sub';






interface AppState {
  subs: Sub[]
  
}

function App() {
	const [subs, setSubs] = useState<AppState['subs']>([]);
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
   
  },[])

  const handleNewSub = (newSub: Sub) => {
    setSubs([...subs, newSub])
  }


	return <div className='App' ref={divRef}>

    <h1>Midu Subs</h1>
  <List subs={subs}/>
  <Form onNewSub={handleNewSub}/>
  </div>;
}

export default App;
