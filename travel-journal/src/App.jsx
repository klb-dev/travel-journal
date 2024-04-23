import Navbar from './components/Navbar'
import './App.css'
import data from './data'
import Card from './components/Card'

export default function App() {
    const cards = data.map(item => { 
      return (
        <Card 
          key= {item.id}
          item= {item}
        />
      )
    
    })

    return (
    <>
      <Navbar />
      <main className="cards">
        {cards} 
      </main>
      
    </>
  )
}

