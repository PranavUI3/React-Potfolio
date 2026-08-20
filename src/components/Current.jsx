import React from 'react'

const Current = () =>
{
    return (
        <section
            id="learning"
            className="relative overflow-hidden bg-gradient-to-br from-[#09090b] via-[#151020] to-[#09090b] px-6 py-24 text-center text-zinc-100"
        >
            {/* Background glow */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[100px]" />

            <div className="relative flex flex-col items-center">

                {/* Heading */}
                <h1 className="p-5 text-4xl font-bold tracking-tight text-white transition-all duration-500 hover:text-violet-400">
                    CURRENTLY LEARNING
                </h1>

                {/* Technologies */}
                <ul className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-10">
                    <li className="cursor-default rounded-xl border border-zinc-800 bg-zinc-900/60 px-6 py-4 text-2xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/10">
                        ⚡ DSA
                    </li>

                    <li className="cursor-default rounded-xl border border-zinc-800 bg-zinc-900/60 px-6 py-4 text-2xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/10">
                        ⚛ React
                    </li>

                    <li className="cursor-default rounded-xl border border-zinc-800 bg-zinc-900/60 px-6 py-4 text-2xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/10">
                        🐍 Python
                    </li>
                </ul>

                {/* Description */}
                <span className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                    A small section showing what I'm currently working on
                    and continuously improving.
                </span>

            </div>
        </section>
    )
}

export default Current