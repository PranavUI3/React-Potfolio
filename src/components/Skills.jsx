import React from 'react'

const Skills = () => {
  return (
  <section
  id="skills"
  className="bg-zinc-950 px-6 py-24 text-zinc-100"
>
  {/* Heading */}
  <div className="mx-auto mb-14 max-w-6xl text-center">
    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
      My Skills
    </p>

    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
      Technologies I Work With
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
      A collection of technologies and tools I use to build modern
      and responsive applications.
    </p>
  </div>

  {/* Skill Cards */}
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">

    {/* Frontend */}
    <div
      className="
        rounded-2xl
        border border-zinc-800
        bg-gradient-to-br from-zinc-900 via-[#171022] to-zinc-950
        p-7
        shadow-xl shadow-black/20
        transition-all duration-300
        hover:-translate-y-1
        hover:border-violet-500/50
        hover:from-zinc-900
        hover:via-[#211432]
        hover:to-zinc-950
      "
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-lg text-violet-400">
          ⚛
        </div>

        <h3 className="text-xl font-semibold">
          Frontend
        </h3>
      </div>

      <ul className="space-y-3 text-zinc-400">
        <li>✓ React</li>
        <li>✓ HTML</li>
        <li>✓ CSS</li>
        <li>✓ JavaScript</li>
        <li>✓ Tailwind CSS</li>
      </ul>
    </div>

    {/* Backend */}
    <div
      className="
        rounded-2xl
        border border-zinc-800
        bg-gradient-to-br from-zinc-900 via-[#171022] to-zinc-950
        p-7
        shadow-xl shadow-black/20
        transition-all duration-300
        hover:-translate-y-1
        hover:border-violet-500/50
        hover:from-zinc-900
        hover:via-[#211432]
        hover:to-zinc-950
      "
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-lg text-violet-400">
          ⚙
        </div>

        <h3 className="text-xl font-semibold">
          Backend
        </h3>
      </div>

      <ul className="space-y-3 text-zinc-400">
        <li>✓ Node.js</li>
        <li>✓ Express</li>
        <li>✓ MongoDB</li>
        <li>✓ REST API</li>
      </ul>
    </div>

    {/* Tools */}
    <div
      className="
        rounded-2xl
        border border-zinc-800
        bg-gradient-to-br from-zinc-900 via-[#171022] to-zinc-950
        p-7
        shadow-xl shadow-black/20
        transition-all duration-300
        hover:-translate-y-1
        hover:border-violet-500/50
        hover:from-zinc-900
        hover:via-[#211432]
        hover:to-zinc-950
      "
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-lg text-violet-400">
          🛠
        </div>

        <h3 className="text-xl font-semibold">
          Tools
        </h3>
      </div>

      <ul className="space-y-3 text-zinc-400">
        <li>✓ Git</li>
        <li>✓ GitHub</li>
        <li>✓ VS Code</li>
        <li>✓ Vite</li>
      </ul>
    </div>

  </div>
</section>
  )
}

export default Skills