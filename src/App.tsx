import './App.css'
import '../src/css/bootstrap-5.3.5.min.css';
import '../src/js/bootstrap-5.3.5.bundle.min.js';
import { useEffect, useState } from 'react'
import { CursorLight } from './components/CursorLight.js'
import { Nav } from './components/Nav'
import { Main } from './components/Main'
import { ScrollToTop } from './components/ScrollToTop.js'

function App() {
  const [colorH, setColorH] = useState<number>(Math.floor(Math.random() * 360));
  const fullCycle = 18 * 60 * 1000;

  useEffect(() => {
    const changeColor = () => setColorH(current => (current + 1) % 360);
    const timer = setInterval(changeColor, fullCycle / 360);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <CursorLight colorH={colorH} />
      <div className="w-25 h-100 position-fixed">
        <Nav colorH={colorH} />
      </div>
      <div className="pl-25 h-100">
        <Main colorH={colorH} />
      </div>
      <ScrollToTop colorH={colorH} />
    </>
  )
}

export default App
