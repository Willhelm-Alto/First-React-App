import './App.css'
import Add from './components/add.jsx' 
import Get from './components/get.jsx'
import Update from './components/update.jsx'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Meu App Crud</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/" element={<Get/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
