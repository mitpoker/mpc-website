import Head from 'next/head'
import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image'

import Carousel1 from '../../images/carousel/c1.jpeg'
import Carousel2 from '../../images/carousel/c2.jpeg'
import Carousel3 from '../../images/carousel/c3.jpeg'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className="w-full">
        <div className="mx-auto mt-10 align-center items-center flex flex-col">
          <Carousel />

          <h2 className="text-zinc-700 font-bold text-2xl mx-auto mt-10 text-center">Welcome to the MIT Poker Club!</h2>
          <div className="max-w-prose mt-5 text-justify prose prose-zinc">
            <div className="px-2 flex flex-col">
              <p>{"Welcome to MIT Poker Club! We provide a fun, spirited learning environment for poker enthusiasts and novices alike — all levels are welcome! Throughout the year, we organize workshops, study breaks, tournaments, and more to enhance members' analytical and mathematical skills used in poker strategies, with an emphasis on understanding decision making processes. Our strong connections with trading companies provide great networking opportunities for club members, as both poker and trading require similar strategical skills."} </p>
              <p>If you have any questions about the MIT Poker Club, or are interested in becoming a member or joining the executive committee, please see our <Link href="/faq">FAQ</Link> or <Link href="/contact">contact us</Link>. </p>
            </div>
          </div>
        </div>
      </main >
    </>
  )
}

const carouselStyle = {
  maxWidth: '800px',
}

const Carousel = () => (
  <div className="w-full md:w-3/4" style={carouselStyle}>
    <Slider {...{
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1
    }}>
      <div>
        <Image src={Carousel1} alt=""></Image>
      </div>
      <div>
        <Image src={Carousel2} alt=""></Image>
      </div>
      <div>
        <Image src={Carousel3} alt=""></Image>
      </div>
    </Slider>
  </div>
)
