import React from 'react'

const Hero = () =>
{
    return (
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-[#171022] to-zinc-950 px-6 text-center">

            {/* Subtle background glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

            <div className="relative z-10 max-w-3xl">

                {/* Small heading */}
                <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
                    Full-Stack Developer
                </p>

                {/* Main heading */}
                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
                    Hi, I'm Pranav 👋
                </h1>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
                    I build modern, responsive web applications using React,
                    JavaScript, and modern web technologies.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

                    <a
                        href="#projects"
                        className="rounded-lg bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20"
                    >
                        View My Projects
                    </a>

                    <a
                        href="#contact"
                        className="rounded-lg border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-zinc-200 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-900"
                    >
                        Contact Me
                    </a>

                </div>

            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 animate-bounce text-zinc-500">
                ↓
            </div>

        </section>
    )
}

export default Hero