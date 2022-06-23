import { useState, lazy, Suspense } from 'react'
// import logo from './logo.svg'
import './App.css'

const Content = lazy(() => import('home/Content'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>local</h1>
      <Suspense fallback={<div>loading……</div>}>
        <Content></Content>
      </Suspense>
    </div>
  )
}

export default App
