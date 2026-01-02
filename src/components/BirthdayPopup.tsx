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
    const [showFirstNo, setShowFirstNo] = useState(false)
    const [showSecondNo, setShowSecondNo] = useState(false)

    const handleFirstYes = (): void => {
        setStep('question2')
    }

    const handleSecondYes = (): void => {
        setStep('final_message')
    }

    const handleBackdropClick = (e: React.MouseEvent): void => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
            onClick={handleBackdropClick}
        >
            {/* Modal Content */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full z-10 backdrop-blur-sm border-2 border-cyan-400 border-opacity-40 animate-modal-pop relative overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 text-white hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 hover:rotate-90 active:scale-95"
                    aria-label="Close popup"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-10 animate-shimmer"></div>

                {step === 'question1' && (
                    <div className="text-center animate-slide-up relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 animate-glow">
                            Did you like your birthday?
                        </h2>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <button
                                onClick={handleFirstYes}
                                className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 active:scale-95 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 animate-slide-shine"></div>
                                <span className="relative text-lg">Yes! 😊</span>
                            </button>
                            <button
                                onClick={() => setShowFirstNo(true)}
                                className="group relative px-10 py-4 bg-blue-900/50 backdrop-blur-sm border-2 border-cyan-400/50 text-white font-bold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <span className="relative">
                                    <div className="text-lg">No 😢</div>
                                    {showFirstNo && (
                                        <div className="text-sm mt-2 transition-all duration-500 animate-fade-in">
                                            I thought you gonna love it... 💔
                                        </div>
                                    )}
                                </span>
                            </button>
                        </div>
                    </div>
                )}

                {step === 'question2' && (
                    <div className="text-center animate-slide-up relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 animate-glow">
                            Was this the best ever?
                        </h2>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <button
                                onClick={handleSecondYes}
                                className="group relative px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-base rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 active:scale-95 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 animate-slide-shine"></div>
                                <span className="relative">Yes! 🎉</span>
                            </button>
                            <button
                                onClick={() => setShowSecondNo(true)}
                                className="group relative px-6 py-4 bg-blue-900/50 backdrop-blur-sm border-2 border-cyan-400/50 text-white font-bold text-base rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <span className="relative">
                                    <div>No 😅</div>
                                    {showSecondNo && (
                                        <div className="text-sm mt-2 transition-all duration-500 animate-fade-in">
                                            My bad 🤭
                                        </div>
                                    )}
                                </span>
                            </button>
                        </div>
                    </div>
                )}

                {step === 'final_message' && (
                    <div className="text-center animate-slide-up relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6 animate-glow">
                            I love you Marcel
                        </h2>
                        <p className="text-base md:text-lg text-cyan-100 mb-8">
                            Happy Birthday to the most amazing person in my life! 🎊🎉
                        </p>
                        <button
                            onClick={onClose}
                            className="group relative px-6 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-900 font-bold text-base rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 active:scale-95 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 animate-slide-shine"></div>
                            <span className="relative">Back to Home</span>
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
          }
        }

        @keyframes modal-pop {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          50% {
            transform: scale(1.05) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(103, 232, 249, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(103, 232, 249, 0.8), 0 0 30px rgba(103, 232, 249, 0.6);
          }
        }

        @keyframes heart-beat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.15);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.08);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-modal-pop {
          animation: modal-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }

        .animate-slide-shine {
          animation: slide-shine 1s ease-in-out;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-heart-beat {
          animation: heart-beat 1.5s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite
      `}</style>
        </div>
    )
}
