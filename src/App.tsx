import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dedication from './pages/Dedication'
import FirstGift from './pages/FirstGift'
import SecondGift from './pages/SecondGift'
import ThirdGift from './pages/ThirdGift'
import Gift from './pages/Gift'
import Landing from './pages/Landing'

function App(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/gift" element={<Gift />} />
                <Route path="/gift/first" element={<FirstGift />} />
                <Route path="/gift/second" element={<SecondGift />} />
                <Route path="/gift/third" element={<ThirdGift />} />
                <Route path="/dedication" element={<Dedication />} />
            </Routes>
        </Router>
    )
}

export default App
