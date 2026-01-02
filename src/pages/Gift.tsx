import { useNavigate } from 'react-router-dom'

export default function Gift(): JSX.Element {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-700 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center">
                {/* Gift Box Animation */}
                <div className="mb-8">

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                        Your Gift, Marcel
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
                        <button className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 active:scale-95 overflow-hidden">
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <span className="relative text-lg">Yes!</span>
                        </button>
                        <button className="group relative px-10 py-4 bg-blue-900/50 backdrop-blur-sm border-2 border-cyan-400/50 text-white font-bold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95 overflow-hidden">
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
