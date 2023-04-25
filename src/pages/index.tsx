import Head from 'next/head'
import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image'

import Carousel1 from '../../images/carousel/img1.jpg'
import Carousel2 from '../../images/carousel/img2.jpg'
import Carousel3 from '../../images/carousel/committee.jpg'
import Carousel4 from '../../images/carousel/fall-main-event.jpg'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>MIT Poker Club</title>
        <meta name="description" content="MIT Poker Club provides a fun, spirited learning environemnt for poker enthusiasts and novices alike." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <div className="mx-auto mt-10 align-center items-center flex flex-col">
          <Carousel />

          <h2 className="text-zinc-700 font-bold text-2xl mx-auto mt-10 text-center">Welcome to the MIT Poker Club!</h2>
          <div className="max-w-prose mt-5 text-justify prose prose-zinc">
            <p>{"Welcome to the MIT Poker Club website! We provide a fun, spirited learning environment for poker enthusiasts and novices alike - all levels are welcome! Throughout the year, we organize workshops, study breaks, tournaments, and more to enhance members' analytical and mathematical skills used in poker strategies, with an emphasis on understanding decision making processes. Our strong connections with trading companies provide great networking opportunities for club members, as both poker and trading require similar strategical skills."}  </p>
            <p>If you have any questions about the MIT Poker Club, or are interested in becoming a member or joining the executive committee, please see our <Link href="/faq">FAQ</Link> or <Link href="/contact">contact us</Link>. </p>
          </div>
        </div>
      </main >
    </>
  )
}

const Carousel = () => (
  <div className="w-3/4">
    <Slider {...{
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }}>
      <div>
        <Image src={Carousel3} alt=""></Image>
      </div>
      <div>
        <Image src={Carousel4} alt=""></Image>
      </div>
      <div>
        <Image src={Carousel1} alt=""></Image>
      </div>
      <div>
        <Image src={Carousel2} alt=""></Image>
      </div>
    </Slider>
  </div>
)
