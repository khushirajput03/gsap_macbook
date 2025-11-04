import Hero from './components/Hero'
import { Navvar } from './components/Navvar'
import { ProductViewer } from './components/ProductViewer'
import './index.css'
import Performance from './components/Performance'
import gsap from 'gsap';
import Highlights from './components/Highlights'
import {ScrollTrigger,SplitText} from 'gsap/all'
import Features from './components/Features'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  

  return (
    <>
     <Navvar/>
     <Hero/>
     <ProductViewer/>
     <Performance/>
     <Features/>
     <Highlights/>
     <Footer/>
    </>
  )
}

export default App
