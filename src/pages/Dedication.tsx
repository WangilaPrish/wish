import { useNavigate } from 'react-router-dom'

export default function Dedication(): JSX.Element {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-700 flex items-center justify-center p-4">
            <div className="max-w-3xl w-full text-center">
                {/* Heart Animation */}
                <div className="mb-8">
                    <div className="text-9xl animate-pulse mb-6">💖</div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                        For You, Marcel
                    </h1>
                </div>

                {/* Dedication Message */}
                <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-12 mb-8 border-2 border-white border-opacity-40 shadow-2xl">
                    <p className="text-2xl text-white font-light mb-8 leading-relaxed">
                        Marcel, on this special day, I want you to know...
                    </p>

                    <div className="space-y-6 mb-8">
                        <p className="text-xl text-white font-light">
                            You are the light that brightens my darkest days,
                        </p>
                        <p className="text-xl text-white font-light">
                            The warmth that melts away the cold,
                        </p>
                        <p className="text-xl text-white font-light">
                            The reason my heart smiles every single day.
                        </p>
                    </div>

                    <div className="text-3xl font-bold text-yellow-200 mb-8 drop-shadow-lg">
                        Happy Birthday to the one who means everything to me ✨
                    </div>

                    <p className="text-lg text-white font-light">
                        Thank you for being you. Thank you for all the love, laughter, and memories we share. You deserve the most amazing birthday ever! 🎊💕
                    </p>

                    {/* Decorative Elements */}
                    <div className="grid grid-cols-5 gap-2 mt-8 text-3xl">
                        <div className="animate-bounce" style={{ animationDelay: '0s' }}>💕</div>
                        <div className="animate-bounce" style={{ animationDelay: '0.1s' }}>💫</div>
                        <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>💕</div>
                        <div className="animate-bounce" style={{ animationDelay: '0.3s' }}>💫</div>
                        <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>💕</div>
                    </div>
                </div>

                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="px-8 py-4 bg-cyan-400 text-blue-900 font-bold text-lg rounded-full hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 active:scale-95 drop-shadow-lg"
                >
                    ← Back to Home
                </button>
            </div>
        </div>
    )
}
