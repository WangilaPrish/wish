import { useNavigate } from 'react-router-dom'

export default function Gift(): JSX.Element {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center">
                {/* Gift Box Animation */}
                <div className="mb-8">
                    <div className="text-9xl animate-bounce mb-6">🎁</div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                        Your Gift, Marcel
                    </h1>
                </div>

                {/* Gift Message */}
                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-10 mb-8 border-2 border-white border-opacity-30">
                    <p className="text-2xl text-white font-light mb-6 leading-relaxed">
                        This year, I wanted to give you something truly special. The greatest gift I can give you is...
                    </p>

                    <div className="text-white text-3xl font-bold mb-6 drop-shadow-lg">
                        The gift of knowing how much you mean to me
                    </div>

                    <p className="text-xl text-white font-light mb-8">
                        You make every moment brighter, every day better, and every memory unforgettable. Your smile, your laugh, your presence—that's the best gift in the world to me. 💝
                    </p>

                    {/* Confetti-like elements */}
                    <div className="grid grid-cols-4 gap-4 mb-8">
                        <div className="text-4xl animate-bounce" style={{ animationDelay: '0s' }}>💕</div>
                        <div className="text-4xl animate-bounce" style={{ animationDelay: '0.1s' }}>✨</div>
                        <div className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>⭐</div>
                        <div className="text-4xl animate-bounce" style={{ animationDelay: '0.3s' }}>💕</div>
                    </div>
                </div>

                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 drop-shadow-lg"
                >
                    ← Back to Home
                </button>
            </div>
        </div>
    )
}
