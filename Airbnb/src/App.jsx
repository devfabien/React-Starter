
import Navbar from './components/Navbar'
import './App.css'
import image2 from './assets/image2.png';
import image1 from './assets/image1.png';
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
 

  return (
    <>
     <Navbar/>
     <Hero/>
     <div style={{display:'flex'}}>
     <Card
     image={image1}
     ratio='5.0'
     num='6'
     info='Life lessons with Katie Zaferes '
     money='136'
     />
     <Card
     image={image2}
     ratio='5.0'
     num='30'
     info='Learn wedding photography'
     money='125'
     />
     </div>
    </>
  )
}

export default App
