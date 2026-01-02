import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Gift(): JSX.Element {
    const [showPopup, setShowPopup] = useState(false)
    const [showUngrateful, setShowUngrateful] = useState(false)
    const timeoutRef = useRef<number | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        return () => {
            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    const handleYes = () => {
        setShowUngrateful(false)
        setShowPopup(true)

        if (timeoutRef.current !== null) {
            window.clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = window.setTimeout(() => {
            navigate('/gift/first')
        }, 1400)
    }

    const handleNo = () => {
        setShowPopup(false)
        setShowUngrateful(true)

        if (timeoutRef.current !== null) {
            window.clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-700 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center">
                {showUngrateful && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-20">
                        <div className="relative bg-white/90 text-blue-950 rounded-3xl p-8 shadow-2xl max-w-md w-full border border-white/60">
                            <button
                                onClick={() => setShowUngrateful(false)}
                                className="absolute right-3 top-3 h-10 w-10 rounded-full border border-blue-200/80 text-blue-800 font-bold shadow-sm hover:bg-blue-50 active:scale-95 transition"
                                aria-label="Close ungrateful message"
                            >
                                ×
                            </button>
                            <h2 className="text-2xl font-bold mb-3">You are ungrateful.</h2>
                            <p className="text-base text-blue-900/80">Come back when you appreciate my effort.</p>
                        </div>
                    </div>
                )}

                {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-20">
                        <div className="bg-white/90 text-blue-950 rounded-3xl p-8 shadow-2xl max-w-md w-full border border-white/60">
                            <h2 className="text-3xl font-bold mb-4">Awesome!</h2>
                            <p className="text-lg mb-3">Let&apos;s move on to the first gift.</p>
                            <p className="text-sm text-blue-900/70">Hang tight, taking you there now…</p>
                        </div>
                    </div>
                )}

                {/* Gift Box Animation */}
                <div className="mb-8">

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                        Gifting time ...
                    </h1>
                </div>

                {/* Gift Message */}
                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-10 mb-8 border-2 border-white border-opacity-30">

                    <p className="text-xl text-white font-light mb-6 leading-relaxed">
                        I really had a hard time figuring out what to give you because I felt I have given you everything you have ever wanted. Although that was the case, of course I remember the things you ever wanted that you even mentioned once to me. Others are just things I saw you need based on your interests. This website being one of the gifts, I hope you love it handsome.
                    </p>

                    <p className="text-xl text-white font-light mb-6 leading-relaxed">
                        It really wasn't that easy to make it work how I want it, but here it is. If you want to get the gifts, you must first answer this question:
                    </p>

                    <div className="text-white text-2xl font-bold mb-6 drop-shadow-lg">
                        Do you like the website I made for you, Marcel?
                    </div>

                    {/* Yes/No Buttons */}
                    <div className="flex gap-4 justify-center mb-6">
                        <button
                            onClick={handleYes}
                            className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 active:scale-95 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <span className="relative text-lg">Yes!</span>
                        </button>
                        <button
                            onClick={handleNo}
                            className="group relative px-10 py-4 bg-blue-900/50 backdrop-blur-sm border-2 border-cyan-400/50 text-white font-bold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <span className="relative text-lg">No</span>
                        </button>
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
