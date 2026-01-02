import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BirthdayPopup from '../components/BirthdayPopup'

export default function Landing(): JSX.Element {
  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="text-center max-w-4xl w-full">
        {/* Animated Title */}
        <div className="mb-8 animate-bounce">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-2 drop-shadow-lg">
            Happy Birthday
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
            Marcel 🎉
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white mb-16 drop-shadow-md font-light">
          Today is YOUR special day! Let's celebrate you 🎂✨
        </p>

        {/* Button Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Gift Button */}
          <button
            onClick={() => navigate('/gift')}
            className="group relative px-8 py-6 text-xl font-bold text-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <span className="relative block text-4xl mb-2">🎁</span>
            <span className="relative">Your Gift</span>
          </button>

          {/* Dedication Button */}
          <button
            onClick={() => navigate('/dedication')}
            className="group relative px-8 py-6 text-xl font-bold text-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <span className="relative block text-4xl mb-2">💝</span>
            <span className="relative">Dedication</span>
          </button>

          {/* Pop-up Button */}
          <button
            onClick={() => setShowPopup(true)}
            className="group relative px-8 py-6 text-xl font-bold text-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <span className="relative block text-4xl mb-2">💬</span>
            <span className="relative">Pop-Up</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-4 text-4xl animate-pulse">
          <span>🎈</span>
          <span>🎊</span>
          <span>🎈</span>
        </div>
      </div>

      {/* Birthday Popup Modal */}
      {showPopup && <BirthdayPopup onClose={() => setShowPopup(false)} />}
    </div>
  )
}
