import React, { useReducer, useState } from 'react';
import namesReducer, { addName } from './Redux/list/listReducer';
const names = ['hellow', 'turbo', 'javascript'];
function App() {
  
  const [state, dispatch] = useReducer(namesReducer, []); 
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addName(name));
    setName('');
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Application Using Redux With Reactjs</h1>
      <div style={{ textAlign: 'center' }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '5px 5px', marginRight: '25px' }}
          />
          <button style={{ padding: '5px 20px' }} type="submit">
            Add
          </button>
        </form>
        <div style={{ width: 'fit-content', margin: '0 auto' }}>
          <ul>
          {names.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
            {state.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;