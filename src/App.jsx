import Hero from './components/Hero'
import { Navvar } from './components/Navvar'
import { ProductViewer } from './components/ProductViewer'
import './index.css'
import gsap from 'gsap';
import {ScrollTrigger,SplitText} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function App() {
  

  return (
    <>
     <Navvar/>
     <Hero/>
     <ProductViewer/>
    </>
  )
}

export default App
