
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import Card from './components/Card'
import CardData from './components/CardData'

function App() {
 
const CardElement=CardData.map((card,id)=><Card key={id} image={card.image} ratio={card.ratio} num={card.num} info={card.info} money={card.money} openSpot={card.openSpot}/>)
  return (
    <>
     <Navbar/>
     <Hero/>
     <section className="cards-list">
                {CardElement}
            </section>
    
    </>
  )
}

export default App
