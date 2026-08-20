import React from 'react'

const LetsConnect = () =>
{
    return (
        <section
  id="contact"
  className="relative overflow-hidden bg-gradient-to-br from-[#09090b] via-[#151020] to-[#09090b] px-6 py-24 text-center text-zinc-100"
>
  {/* Background glow */}
  <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

  <div className="relative flex flex-col items-center">

    {/* Heading */}
    <div id="heading">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
        Get In Touch
      </p>

      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        LET'S CONNECT
      </h1>
    </div>

    {/* Description */}
    <div id="para" className="mt-5">
      <p className="text-lg font-medium text-zinc-400 sm:text-xl">
        Have a project or opportunity?
      </p>

      <p className="mt-2 text-sm text-zinc-500">
        I'd love to hear from you. Let's build something great together.
      </p>
    </div>

    {/* Networks */}
    <div
  id="networks"
  className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
>
  {/* GitHub */}
  <a
    href="#"
    className="rounded-xl border border-sky-400/30 bg-sky-400/10 px-7 py-3 font-medium text-sky-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/60 hover:bg-sky-400/20 hover:text-sky-200 hover:shadow-lg hover:shadow-sky-500/10"
  >
    GitHub ↗
  </a>

  {/* LinkedIn */}
  <a
    href="#"
    className="rounded-xl border border-sky-400/30 bg-sky-400/10 px-7 py-3 font-medium text-sky-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/60 hover:bg-sky-400/20 hover:text-sky-200 hover:shadow-lg hover:shadow-sky-500/10"
  >
    LinkedIn ↗
  </a>

  {/* Email */}
  <a
    href="mailto:your@email.com"
    className="rounded-xl border border-sky-400/50 bg-sky-500/80 px-7 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
  >
    Email ↗
  </a>
</div>

  </div>
</section>
    )
}

export default LetsConnect