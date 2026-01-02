import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SecondGift(): JSX.Element {
    const navigate = useNavigate()
    const touchStartX = useRef<number | null>(null)
    const [showPerfume, setShowPerfume] = useState(false)

    useEffect(() => {
        const timer = window.setTimeout(() => setShowPerfume(true), 60000)
        return () => window.clearTimeout(timer)
    }, [])

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = event.touches[0]?.clientX ?? null
    }

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        if (touchStartX.current === null) return

        const endX = event.changedTouches[0]?.clientX ?? touchStartX.current
        const delta = endX - touchStartX.current
        const threshold = 48

        if (delta > threshold) {
            navigate('/gift/first')
        } else if (delta < -threshold) {
            navigate('/gift/third')
        }

        touchStartX.current = null
    }

    return (
        <div
            className="relative min-h-screen bg-gradient-to-br from-indigo-800 via-purple-800 to-fuchsia-700 flex items-center justify-center p-6"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <button
                onClick={() => navigate('/gift/first')}
                className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/85 text-indigo-900 text-2xl font-bold shadow-lg border border-white/60 hover:-translate-y-[52%] hover:shadow-fuchsia-300/50 transition-all duration-300"
                aria-label="Previous gift"
            >
                ‹
            </button>

            <button
                onClick={() => navigate('/gift/third')}
                className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/85 text-indigo-900 text-2xl font-bold shadow-lg border border-white/60 hover:-translate-y-[52%] hover:shadow-fuchsia-300/50 transition-all duration-300"
                aria-label="Next gift"
            >
                ›
            </button>

            <div className="max-w-3xl w-full bg-white/12 backdrop-blur-xl border border-white/25 rounded-3xl shadow-2xl p-10 text-center text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-200 mb-4">Second Gift</p>
                <p className="text-base md:text-lg leading-relaxed text-white/90 mb-8">
                    You said you just need two perfumes, right? Actually, the perfume I gave you to smell—you weren&apos;t supposed to take it, but you did. Because you loved it, I had no option but to get you the full bottle. You now have two signature scents. Now turn back to get your second gift.
                </p>
                {showPerfume && (
                    <div className="mt-6 rounded-2xl border border-fuchsia-200/60 bg-white/10 px-6 py-4 mb-4 text-center shadow-lg backdrop-blur">
                        <p className="text-base font-semibold tracking-wide text-white">RAVE NOW PERFUME</p>
                    </div>
                )}
                <div className="flex gap-4 justify-center flex-wrap">
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-2 rounded-full bg-white text-indigo-900 font-bold text-sm shadow-lg hover:shadow-fuchsia-300/40 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Back to Home
                    </button>
                    <button
                        onClick={() => navigate('/gift')}
                        className="px-6 py-2 rounded-full border border-white/60 text-white font-bold text-sm shadow-lg hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Back to Gifts
                    </button>
                </div>
            </div>
        </div>
    )
}
