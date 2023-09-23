import { SyntheticEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function fillArray(n: number) {
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push({ id: i, order: i, text: `card ${i}` },)
  }
  return arr
}

function App() {
  // const [count, setCount] = useState(0)
  const [cards, setCards] = useState(fillArray(4))
  const [currentCard, setCurrentCard] = useState(null)

  function dragStartHandler(event: DragEvent<HTMLDivElement>, card): void {
    console.log('drop', card)
    setCurrentCard(card)
  }

  function dragLeaveHandler(e: any): void {
  }

  function dragEndHandler(e: any): void {
    e.target.style.background = 'white' // TODO
  }

  function dragOverHandler(e: SyntheticEvent): void {
    e.preventDefault()
    e.target.style.background = 'lightgrey'
  }

  function dropHandler(e: any, card): void {
    e.preventDefault()
    console.log('drop', card)
    const updatedCards = cards
  }

  return (
    <div className="app">
      {cards.map(card => (
        <div
          // we take card
          onDragStart={(e) => dragStartHandler(e, card)}
          // we leave limits other card
          onDragLeave={(e) => dragLeaveHandler(e)}
          // we leave mooving
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, card)}
          draggable={true}
          className="card"
          key={card.id}>
          {card.text}
        </div>
      ))}
    </div>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
