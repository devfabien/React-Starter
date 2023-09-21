
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import Card from './components/Card'
import CardData from './components/CardData'

function App() {
 
const CardElement=CardData.map((item,id)=><Card key={id} item={item}/>)
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
