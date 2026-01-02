import { useState } from 'react'

interface BirthdayPopupProps {
    onClose: () => void
}

type PopupStep = 'question1' | 'question2' | 'falling_hearts' | 'final_message'

interface FallingHeart {
    id: number
    left: number
}

export default function BirthdayPopup({ onClose }: BirthdayPopupProps): JSX.Element {
    const [step, setStep] = useState<PopupStep>('question1')
    const [fallingHearts, setFallingHearts] = useState<FallingHeart[]>([])
    const [heartCounter, setHeartCounter] = useState(0)

    const dropHearts = (): void => {
        const hearts: FallingHeart[] = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
        }))
        setFallingHearts(hearts)

        setTimeout(() => {
            setFallingHearts([])
        }, 2000)
    }

    const handleFirstYes = (): void => {
        dropHearts()
        setTimeout(() => {
            setStep('question2')
        }, 2000)
    }

    const handleSecondYes = (): void => {
        dropHearts()
        setTimeout(() => {
            setStep('final_message')
        }, 2000)
    }

    const handleBackdropClick = (e: React.MouseEvent): void => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={handleBackdropClick}
        >
            {/* Falling Hearts Container */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {fallingHearts.map((heart) => (
                    <div
                        key={heart.id}
                        className="absolute text-4xl animate-fall"
                        style={{
                            left: `${heart.left}%`,
                            top: '-50px',
                        }}
                    >
                        ❤️
                    </div>
                ))}
            </div>

            {/* Modal Content */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full z-10 backdrop-blur-sm">
                {step === 'question1' && (
                    <div className="text-center animate-fade-in">
                        <div className="text-6xl mb-6">🎂</div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Did you like your birthday?
                        </h2>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={handleFirstYes}
                                className="px-8 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                            >
                                Yes! 😊
                            </button>
                            <button
                                onClick={() => setStep('question1')}
                                className="px-8 py-3 bg-gradient-to-r from-red-400 to-red-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                            >
                                <div>No 😢</div>
                                <div
                                    className={`text-sm mt-2 transition-all duration-500 overflow-hidden ${step === 'question1' ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    I thought you gonna love it... 💔
                                </div>
                            </button>
                        </div>
                    </div>
                )}

                {step === 'question2' && (
                    <div className="text-center animate-fade-in">
                        <div className="text-6xl mb-6">✨</div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Was this the best ever?
                        </h2>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={handleSecondYes}
                                className="px-8 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                            >
                                Yes! 🎉
                            </button>
                            <button
                                onClick={() => setStep('question2')}
                                className="px-8 py-3 bg-gradient-to-r from-red-400 to-red-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                            >
                                <div>No 😅</div>
                                <div
                                    className={`text-sm mt-2 transition-all duration-500 overflow-hidden ${step === 'question2' ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    My bad 🤭
                                </div>
                            </button>
                        </div>
                    </div>
                )}

                {step === 'final_message' && (
                    <div className="text-center animate-fade-in">
                        <div className="text-8xl mb-6 animate-bounce">💕</div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
                            I love you Marcel
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Happy Birthday to the most amazing person in my life! 🎊🎉
                        </p>
                        <button
                            onClick={onClose}
                            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                            Back to Home
                        </button>
                    </div>
                )}
            </div>

            <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
        </div>
    )
}
