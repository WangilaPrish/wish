import { useNavigate } from 'react-router-dom'

export default function FirstGift(): JSX.Element {
    const navigate = useNavigate()

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-cyan-700 via-blue-900 to-blue-950 flex items-center justify-center p-6">
            <button
                onClick={() => navigate('/gift/third')}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/80 text-blue-900 text-2xl font-bold shadow-lg border border-white/60 hover:-translate-y-[52%] hover:shadow-cyan-300/50 transition-all duration-300"
                aria-label="Previous gift"
            >
                ‹
            </button>

            <button
                onClick={() => navigate('/gift/second')}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/80 text-blue-900 text-2xl font-bold shadow-lg border border-white/60 hover:-translate-y-[52%] hover:shadow-cyan-300/50 transition-all duration-300"
                aria-label="Next gift"
            >
                ›
            </button>

            <div className="max-w-3xl w-full bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-10 text-center text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200 mb-4">First Gift</p>
                <p className="text-base md:text-lg leading-relaxed text-white/90 mb-8">
                    You are a great artist, Marcel. I don&apos;t know why you rarely do your sketches, but don&apos;t worry—this first gift is for you to grow your talent. Make as many sketches as possible; I want to see them, of course. You are talented, Marcel. ❤️ Now look back to have your first gift.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-3 rounded-full bg-white text-blue-900 font-bold shadow-lg hover:shadow-cyan-400/40 transition-all duration-300 hover:-translate-y-0.5"
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
