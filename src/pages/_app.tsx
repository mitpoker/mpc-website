import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return <> <TopBar></TopBar><Component {...pageProps} /> </>
}

const TopBar = () => {
  return <div className="w-full sticky border-b top-0 backdrop-blur z-50 bg-zinc-50/90">
    <div className="mx-auto max-w-4xl flex justify-between items-center">
      <Link href="/" className="block px-8 py-4 text-xl text-zinc-700 font-bold tracking-wider">
        MIT Poker Club
      </Link>
      <div className="gap-4">
        <a className="m-3 font-semibold text-zinc-700" href="/officers">
          Officers
        </a>
        <a className="m-3 font-semibold text-zinc-700" href="/alumni">
          Officers
        </a>
        <a className="m-3 font-semibold text-zinc-700" href="/sponsors">
          Sponsors
        </a>
        <a className="m-3 font-semibold text-zinc-700" href="/faq">
          FAQ
        </a>
        <a className="m-3 font-semibold text-zinc-700" href="/contact">
          Contact
        </a>
      </div>
    </div>
  </div>
}