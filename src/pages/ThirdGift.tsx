import { useNavigate } from 'react-router-dom'

export default function ThirdGift(): JSX.Element {
    const navigate = useNavigate()

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-emerald-700 via-teal-800 to-cyan-800 flex items-center justify-center p-6">
            <button
                onClick={() => navigate('/gift/second')}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/85 text-emerald-900 text-2xl font-bold shadow-lg border border-white/60 hover:-translate-y-[52%] hover:shadow-emerald-300/50 transition-all duration-300"
                aria-label="Previous gift"
            >
                ‹
            </button>

            <button
                onClick={() => navigate('/gift/first')}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/85 text-emerald-900 text-2xl font-bold shadow-lg border border-white/60 hover:-translate-y-[52%] hover:shadow-emerald-300/50 transition-all duration-300"
                aria-label="Next gift"
            >
                ›
            </button>

            <div className="max-w-3xl w-full bg-white/12 backdrop-blur-xl border border-white/25 rounded-3xl shadow-2xl p-10 text-center text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200 mb-4">Third Gift</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-xl">The final surprise 🌟</h1>
                <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8">
                    The journey ends here with a special last gift. I hope each one made you feel loved and celebrated.
                </p>
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
