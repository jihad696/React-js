import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Link from './component/Link/Link'
import 'bootstrap/dist/css/bootstrap.min.css';  // import the bootstrap css file must be in global file to be seen from all project and the gloabal files are main index.js or App.js
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />
    
     
    </>
  )
}

export default App
