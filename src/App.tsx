import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AutomaticBatching } from './features/AutomaticBatching'
import { NewHook } from './features/NewHook'
import { StrictMode } from './features/StrictMode'
import { Suspense } from './features/Suspense'
import { Transitions } from './features/Transitions'

import '@picocss/pico/css/pico.min.css';

function App() {
  return (
    <main className="container-fluid">
      <h1>FE CG Workshop '22</h1>
      <p>This is a workshop that showcases new features in React 18. Navigate the features and follow instructions.</p>
      <hr/>
      <nav>
        <a href="/automatic-batching">Automatic Batching</a>
        <a href="/transitions">Transitions</a>
        <a href="/suspense">Suspense</a>
        <a href="/strict-mode">Strict Mode</a>    
        <a href="/new-hook-use-id">New hook: useId</a>
      </nav>
      <BrowserRouter>
        <Routes>        
          <Route path="/automatic-batching" element={<AutomaticBatching/>}/>
          <Route path="/transitions" element={<Transitions/>}/>
          <Route path="/suspense" element={<Suspense/>}/>
          <Route path="/strict-mode" element={<StrictMode/>}/>
          <Route path="/new-hook-use-id" element={<NewHook/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
