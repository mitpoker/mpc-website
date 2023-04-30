import { StaticImageData } from "next/image"
import SigImage from "../../images/sponsors/sig.jpg"
import CitadelImage from "../../images/sponsors/citadel.png"
import JaneStreetImage from "../../images/sponsors/janestreet.png"
import JumpImage from "../../images/sponsors/jump.png"
import TwoSigmaImage from "../../images/sponsors/twosigma.jpg"
import VaticImage from "../../images/sponsors/vatic.png"

export enum SponsorTier {
  Platinum = "platinum",
  Gold = "gold",
  Silver = "silver",
  Bronze = "bronze",
}

export type Sponsor = {
  name: string
  tier: SponsorTier
  image: StaticImageData
  text_md?: string
  link: string
}

export const SponsorData: Array<Sponsor> = [
  {
    name: "Sig",
    tier: SponsorTier.Platinum,
    image: SigImage,
    link: "https://sig.com",
    text_md:
      "SIG is a global quantitative trading firm founded with an entrepreneurial mindset and rigorous analytical approach to decision making. SIG also values gaming, poker especially, as a way to teach analytical skills used in trading - check out the [Gamer Blog](https://www.raiseyourgame.com/)!",
  },
  {
    name: "Citadel",
    tier: SponsorTier.Gold,
    image: CitadelImage,
    link: "https://citadel.com",
    text_md:
      "Citadel is a leading investor in the world's financial markets. For over a quarter of a century, Citadel has sought to deliver market-leading investment returns to capital partners. Citadel Securities aims to create the fairest, most transparent, and open markets in the world.",
  },
  {
    name: "Jane Street",
    tier: SponsorTier.Gold,
    image: JaneStreetImage,
    link: "https://janestreet.com",
    text_md:
      "Jane Street is a quantitative trading firm that uses innovative technology, a scientific approach and a deep understanding of markets to guide our business. The markets change rapidly, and we need to change faster still. Every day, we come to work with new problems to solve, new systems to build and new theories to test. We’re always looking for people to join us and help come up with that next great idea.",
  },
  {
    name: "Jump",
    tier: SponsorTier.Silver,
    image: JumpImage,
    link: "https://jumptrading.com",
    text_md:
      "Jump Trading is committed to world class research. We empower exceptional talents in Mathematics, Physics, and Computer Science to seek scientific boundaries, push through them, and apply cutting-edge research to global financial markets.",
  },
  {
    name: "Two Sigma",
    tier: SponsorTier.Silver,
    image: TwoSigmaImage,
    link: "https://twosigma.com",
    text_md:
      "At Two Sigma, we use data science and technology to discover value in markets worldwide. Our community of scientists, technologists and academics collaborate to solve some of the most challenging economic problems. We don’t just wonder— we create systematic tools and technologies to forecast the future of global markets.",
  },
  {
    name: "Vatic",
    tier: SponsorTier.Bronze,
    image: VaticImage,
    link: "https://vaticlabs.ai",
    text_md:
        "Vatic Investments is a global liquidity provider, where traders, AI researchers, and technologists collaborate to develop autonomous trading agents and cutting edge technology. We work together, building systems that boost market efficiency and transparency.",
  },
]
