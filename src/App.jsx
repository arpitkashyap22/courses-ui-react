import './App.css';
import Home from './pages/Home';
import {BrowserRouter,Routes, Route} from 'react-router';

function App() {
  return (
    <>
    Hello Vite + React!
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes here as needed */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
