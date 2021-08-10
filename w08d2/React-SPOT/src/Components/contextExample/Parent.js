import ChildTwo from './ChildTwo';
import ContextHolder from './ContextHolder';
import {useState} from 'react';
import InTheMiddle from './InTheMiddle';

const Parent = (props) => {
  const [counter,setCounter] = useState(0);

  return (
    <div>
      <h2>Parent</h2>
      <ContextHolder.Provider value={{counter,setCounter}}>
        <InTheMiddle/>
        <ChildTwo/>
      </ContextHolder.Provider>
    </div>
  );

};

export default Parent;