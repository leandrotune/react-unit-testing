import { useState } from 'react';

export function App() {
  const [list, setList] = useState(['leandro', 'sabrina', 'isabella'])

  function addToList() {
    setList(state => [...state, 'Novo'])
  }

  return (
    <>
      <button onClick={addToList}>adicionar</button>
      <ul>
        {list.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </>
  )
}

