import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Gift from './pages/Gift'
import Dedication from './pages/Dedication'

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/dedication" element={<Dedication />} />
      </Routes>
    </Router>
  )
}

export default App
