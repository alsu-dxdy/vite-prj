import { SyntheticEvent, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
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
    const updatedCards = cards.map(c => {
      if (c.id === card.id) {
        return {...c, order: currentCard.order} // card - is card bottom
      }

      if (c.id === currentCard.id) {
        return {...c, order: card.order}
      }
      return c
    })
    setCards(updatedCards)
    e.target.style.background = 'white'
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <div className="app">
      {cards.sort(sortCards).map(card => (
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
  )
}

export default App
