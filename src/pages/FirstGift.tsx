import { useNavigate } from 'react-router-dom'

export default function FirstGift(): JSX.Element {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-700 via-blue-900 to-blue-950 flex items-center justify-center p-6">
            <div className="max-w-3xl w-full bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-10 text-center text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200 mb-4">First Gift</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-xl">Here is your first surprise 🎁</h1>
                <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8">
                    This is the first of your gifts. Take a moment to enjoy it—and when you&apos;re ready, keep exploring for more surprises.
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
