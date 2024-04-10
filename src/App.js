import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import Lottie from './LottiePlayer'

const random = Math.random

function App() {
  const [emojis, setEmojis] = useState([])
  useEffect(() => {
    if (emojis.length > 10) {
      return
    }
    setTimeout(() => {
      const size = random() * 0.75 + 1
      setEmojis([
        ...emojis,
        {
          animationDelay: `${random() * 3 + 2}s`,
          width: `${size}em`,
          height: `${size}em`,
          left: `${random() * 120}px`,
          bottom: `${random() * 20}px`,
        },
      ])
    }, random() * 200)
  }, [emojis])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      {emojis.map((e, i) => (
        // <img kenpmy={i} className="emoji" style={e} src="/512.gif" alt="emoji" />
        <div key={i} className="emoji" style={e}>
          <Lottie src="/512.gif" alt="emoji" />
        </div>
      ))}
    </div>
  )
}

export default App
