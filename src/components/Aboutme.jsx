import React from 'react'

const Aboutme = () =>
{
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-gradient-to-br from-[#09090b] via-[#11101a] to-[#09090b] px-6 py-24 text-center"
        >
            {/* Background glow */}
            <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

            {/* Heading */}
            <div id="heading">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
                    About Me
                </p>

                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    A little about me
                </h1>
            </div>

            {/* Description */}
            <div id="para" className="mx-auto mt-5 max-w-2xl">
                <p className="text-base leading-7 text-zinc-400 sm:text-lg">
                    I'm a B.Tech student and developer who enjoys building modern
                    web applications and continuously improving my development skills.
                </p>
            </div>

            {/* Journey Cards */}
            <div
                id="journey"
                className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3"
            >
                {/* Student */}
                <div className="group rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-[#171022] to-zinc-950 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-950/20">
                    <div className="mb-4 text-4xl transition-transform duration-500 group-hover:scale-110">
                        🎓
                    </div>

                    <h2 className="text-xl font-semibold text-white">
                        Student
                    </h2>

                    <p className="mt-2 text-zinc-400">
                        B.Tech
                    </p>
                </div>

                {/* Developer */}
                <div className="group rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-[#171022] to-zinc-950 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-950/20">
                    <div className="mb-4 text-4xl transition-transform duration-500 group-hover:scale-110">
                        💻
                    </div>

                    <h2 className="text-xl font-semibold text-white">
                        Developer
                    </h2>

                    <p className="mt-2 text-zinc-400">
                        React / JavaScript
                    </p>
                </div>

                {/* Learning */}
                <div className="group rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-[#171022] to-zinc-950 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-950/20">
                    <div className="mb-4 text-4xl transition-transform duration-500 group-hover:scale-110">
                        🚀
                    </div>

                    <h2 className="text-xl font-semibold text-white">
                        Learning
                    </h2>

                    <p className="mt-2 text-zinc-400">
                        DSA / Backend
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Aboutme