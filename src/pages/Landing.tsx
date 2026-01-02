import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BirthdayPopup from '../components/BirthdayPopup'

export default function Landing(): JSX.Element {
    const [showPopup, setShowPopup] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-700 flex items-center justify-center p-4">
            <div className="text-center max-w-4xl w-full">
                {/* Animated Title */}
                <div className="mb-8 animate-bounce mt-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                        Happy Birthday
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                        Marcel 🎉
                    </h2>
                </div>

                {/* Subtitle */}
                <div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto mb-8"
                >
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 md:p-12 lg:p-14 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-blue-500/10 hover:shadow-[0_0_50px]">
                        <div className="space-y-6">
                            <p className="text-white/95 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                                Today is all about celebrating you, the kindest, most loving soul I know. Being with you has turned my world upside down in the best way: every smile, quiet moment, and shared dream fills me with gratitude.
                            </p>
                            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                                As you blow out your candles, I wish you boundless joy, lasting health, and success that reaches beyond your wildest hopes. 2026 already feels full of promise for us.
                            </p>
                            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                                Thank you for being my partner, my home, and my greatest adventure. I love you more than words can say. Happy Birthday, my handsome. <span className="inline-block text-xl animate-pulse">💙</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Button Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Gift Button */}
                    <button
                        onClick={() => navigate('/gift')}
                        className="group relative px-6 py-4 text-base font-bold text-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95"
                        style={{
                            background: 'linear-gradient(135deg, #1e3a8a 0%, #0284c7 100%)',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <span className="relative">Gifts</span>
                    </button>

                    {/* Dedication Button */}
                    <button
                        onClick={() => navigate('/dedication')}
                        className="group relative px-6 py-4 text-base font-bold text-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95"
                        style={{
                            background: 'linear-gradient(135deg, #0369a1 0%, #0284c7 100%)',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <span className="relative">Dedication</span>
                    </button>

                    {/* Pop-up Button */}
                    <button
                        onClick={() => setShowPopup(true)}
                        className="group relative px-6 py-4 text-base font-bold text-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95"
                        style={{
                            background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <span className="relative">Last but not least</span>
                    </button>
                </div>

            </div>

            {/* Birthday Popup Modal */}
            {showPopup && <BirthdayPopup onClose={() => setShowPopup(false)} />}
        </div>
    )
}
