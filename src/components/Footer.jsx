import React from 'react'

const Footer = () =>
{
    return (
        <footer className="border-t border-zinc-800/70 bg-zinc-950/80 px-6 py-8 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">

                {/* Brand */}
                <div className="text-lg font-semibold tracking-tight text-zinc-100">
                    Pranav<span className="text-violet-500">.</span>
                </div>

                {/* Copyright */}
                <p className="text-sm text-zinc-500">
                    © 2026 Pranav Sharma. All rights reserved.
                </p>

                {/* Role */}
                <p className="text-sm text-zinc-400">
                    Developer Portfolio
                </p>

            </div>
        </footer>
    )
}

export default Footer