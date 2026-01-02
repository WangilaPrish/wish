import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dedication from './pages/Dedication'
import Gift from './pages/Gift'
import Landing from './pages/Landing'

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
