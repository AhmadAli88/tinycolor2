
import './App.css'
import ColorAdjuster from './components/ColorAdjuster'
import ColorBlender from './components/ColorBlender'
import ColorConverter from './components/ColorConverter'
import ColorManipulator from './components/ColorManipulator'
import ContrastRatioCalculator from './components/ContrastRatioCalculator'
import GradientGenerator from './components/GradientGenerator'
import SaturationAdjuster from './components/Saturation'
import ThemeToggler from './components/ThemeToggler'

function App() {
 

  return (
  <div>
    <ColorManipulator/>
    <ColorAdjuster/>
    <SaturationAdjuster/>
    <ColorConverter/>
    <ColorBlender/>
    <ThemeToggler />
    <GradientGenerator/>
    <ContrastRatioCalculator/>
  </div>
  )
}

export default App
