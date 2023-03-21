import Head from 'next/head'
import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>MIT Poker Club</title>
        <meta name="description" content="TODO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-prose mx-auto text-center my-20">
        The MIT Poker Club website is currently under development.
        <Slider {...{
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        }}>
          <div>
            1
          </div>
          <div>
            2
          </div>
          <div>
            3
          </div>
        </Slider>
      </main>
    </>
  )
}
