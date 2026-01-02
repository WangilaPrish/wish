import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ThirdGift(): JSX.Element {
    const navigate = useNavigate()
    const touchStartX = useRef<number | null>(null)
    const [showYogaMat, setShowYogaMat] = useState(false)

    useEffect(() => {
        const timer = window.setTimeout(() => setShowYogaMat(true), 120000)
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
            navigate('/gift/second')
        } else if (delta < -threshold) {
            navigate('/gift/first')
        }

        touchStartX.current = null
    }

    return (
        <div
            className="relative min-h-screen bg-gradient-to-br from-emerald-700 via-teal-800 to-cyan-800 flex items-center justify-center p-6"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <button
                onClick={() => navigate('/gift/second')}
                className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/85 text-emerald-900 text-2xl font-bold shadow-lg border border-white/60 hover:-translate-y-[52%] hover:shadow-emerald-300/50 transition-all duration-300"
                aria-label="Previous gift"
            >
                ‹
            </button>

            <button
                onClick={() => navigate('/gift/first')}
                className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/85 text-emerald-900 text-2xl font-bold shadow-lg border border-white/60 hover:-translate-y-[52%] hover:shadow-emerald-300/50 transition-all duration-300"
                aria-label="Next gift"
            >
                ›
            </button>

            <div className="max-w-3xl w-full bg-white/12 backdrop-blur-xl border border-white/25 rounded-3xl shadow-2xl p-10 text-center text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200 mb-4">Third Gift</p>
                <p className="text-base md:text-lg leading-relaxed text-white/90 mb-8">
                    So this is the ultimate gift, I know you are so curious but before i give u lemme give u a back story of it......
                    our fvcking life has been so amazing offlate and ofc we want to take things a notch higher. i bought this gift with me giving you a BJ in mind. How i do love your abs and how i want you ro make them more visible. So you better get at work and get them abs visible daddy.
                    Now turn and get your final gift. I love you Marcel, so muchhhhh......
                </p>
                {showYogaMat && (
                    <div className="mt-6 rounded-2xl border border-emerald-200/60 bg-white/10 px-6 py-4 mb-4 text-center shadow-lg backdrop-blur">
                        <p className="text-lg font-semibold tracking-wide text-white">YOGA MAT</p>
                    </div>
                )}
                <div className="flex gap-4 justify-center flex-wrap">
                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-3 rounded-full bg-white text-emerald-900 font-bold shadow-lg hover:shadow-emerald-300/40 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Back to Home
                    </button>
                    <button
                        onClick={() => navigate('/gift')}
                        className="px-8 py-3 rounded-full border border-white/60 text-white font-bold shadow-lg hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Back to Gifts
                    </button>
                </div>
            </div>
        </div>
    )
}
