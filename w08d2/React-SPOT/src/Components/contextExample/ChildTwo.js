import {useContext} from 'react';
import ContextHolder from './ContextHolder';

const ChildTwo = (props) => {

  const {counter,setCounter} = useContext(ContextHolder);

  const handleClick = () => {
    setCounter(prev => prev + 1);
  };

  return (
    <div>
      <h2>ChildTwo: {counter}</h2>
      <button onClick={handleClick}>Plus One</button>
    </div>
  );

};

export default ChildTwo;
