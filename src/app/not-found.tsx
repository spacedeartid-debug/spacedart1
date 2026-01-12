import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white p-6 text-center space-y-6">
            <h2 className="text-neon-blue font-bold tracking-widest uppercase text-sm">Error 404</h2>
            <h1 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter">
                Lost in Space?
            </h1>
            <p className="text-zinc-400 max-w-md mx-auto text-lg">
                The coordinates you are looking for do not exist in this dimension.
            </p>
            <Link
                href="/"
                className="inline-flex items-center justify-center rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-transparent text-neon-blue border border-neon-blue/50 hover:bg-neon-blue/10 hover:border-neon-blue shadow-[0_0_10px_rgba(106,182,255,0.2)] hover:shadow-[0_0_20px_rgba(106,182,255,0.4)] transition-all duration-300 h-12 px-8 text-base tracking-wider uppercase"
            >
                Return to Base
            </Link>
        </div>
    )
}
