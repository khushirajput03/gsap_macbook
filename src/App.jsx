import Hero from './components/Hero'
import { Navvar } from './components/Navvar'
import { ProductViewer } from './components/ProductViewer'
import './index.css'
import gsap from 'gsap';
import {ScrollTrigger,SplitText} from 'gsap/all'
import Showcase from './components/Showcase';

gsap.registerPlugin(ScrollTrigger)

function App() {
  

  return (
    <>
     <Navvar/>
     <Hero/>
     <ProductViewer/>
     <Showcase/>
    </>
  )
}

export default App
