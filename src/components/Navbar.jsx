import React from 'react'

const Navbar = () =>
{
    return (
        <nav className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur-md">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

    {/* Logo */}
    <div id="logo">
      <h1 className="text-xl font-semibold tracking-tight text-zinc-100">
        Pranav<span className="text-violet-500">.</span>
      </h1>
    </div>

    {/* Navigation */}
    <div id="links">
      <ul className="flex items-center gap-8 text-sm text-zinc-400">

        <li>
          <a
            href="#about"
            className="transition-colors duration-200 hover:text-white"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="transition-colors duration-200 hover:text-white"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="transition-colors duration-200 hover:text-white"
          >
            Contact
          </a>
        </li>

        {/* GitHub */}
        <li>
          <a
            href="#"
            className="rounded-lg border border-zinc-700 px-4 py-2 text-zinc-200 transition-all duration-200 hover:border-violet-500 hover:bg-violet-500/10 hover:text-white"
          >
            GitHub ↗
          </a>
        </li>

      </ul>
    </div>

  </div>
</nav>
    )
}

export default Navbar