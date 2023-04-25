import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return <> <TopBar></TopBar><Component {...pageProps} /> </>
}

const pages = ["Events", "Officers", "Alumni", "Sponsors", "FAQ", "Contact"]

const TopBar = () => {
  return <div className="w-full sticky border-b top-0 backdrop-blur z-50 bg-zinc-50/90 overflow-x-scroll">
    <div className="mx-auto max-w-4xl flex justify-between items-center">
      <Link href="/" className="block px-8 py-4 text-xl text-zinc-700 font-bold tracking-wider whitespace-nowrap">
        MIT Poker Club
      </Link>
      <div className="gap-4">
        {pages.map(p =>
          <Link className="m-3 font-semibold text-zinc-700" href={`/${p.toLowerCase()}`}>
            {p}
          </Link>
        )}
      </div>
    </div>
  </div>
}