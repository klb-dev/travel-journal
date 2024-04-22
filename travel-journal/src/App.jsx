import journalImg from '/journalImg.svg'
import './App.css'
import Card from './Card'

export default function App() {

  return (
    <>
      <main className="hero-content">
      <img src={journalImg} className="logo" alt="Journal images" />
      <h1>European Travel Journal</h1>
      </main>
      < Card />
    </>
  )
}

