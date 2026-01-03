import type { JSX } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dedication(): JSX.Element {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-700 flex items-center justify-center p-4">
            <div className="max-w-3xl w-full text-center">
                {/* Heart Animation */}
                <div className="mb-8">
                    <div className="text-5xl animate-pulse mb-6"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                        For You, Marcel ...
                    </h2>
                </div>

                {/* Dedication Message */}
                <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-6 mb-8 border-2 border-white border-opacity-40 shadow-2xl md:p-12">
                    <p className="text-sm md:text-base text-white font-light mb-4 leading-relaxed">
                        Marcel, on this special day, I want you to know...
                    </p>

                    <div className="space-y-4 mb-8">
                        <p className="text-sm md:text-base text-white font-light leading-relaxed">
                            You are the light that brightens my darkest days,
                        </p>
                        <p className="text-sm md:text-base text-white font-light leading-relaxed">
                            The warmth that melts away the cold,
                        </p>
                        <p className="text-sm md:text-base text-white font-light leading-relaxed">
                            The reason my heart smiles every single day.
                        </p>
                    </div>

                    <p className="text-sm md:text-base text-white font-light mb-4 leading-relaxed">
                        Thank you for being you. Thank you for all the love, laughter, and memories we share. You deserve the most amazing birthday ever! 💙
                    </p>

                    {/* YouTube Video Embed */}
                    <div className="mt-8 mb-6">
                        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-cyan-400 border-opacity-30">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/fjrhE7fmdBA"
                                title="Birthday Video for Marcel"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                </div>

                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-4 bg-cyan-400 text-blue-900 font-bold text-base rounded-full hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 active:scale-95 drop-shadow-lg"
                >
                    ← Back to Home
                </button>
            </div>
        </div>
    )
}
