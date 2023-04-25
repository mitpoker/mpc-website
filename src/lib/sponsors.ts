import { StaticImageData } from "next/image"
import SigImage from "../../images/sponsors/sig.jpg"
import CitadelImage from "../../images/sponsors/citadel.png"
import TwoSigmaImage from "../../images/sponsors/twosigma.jpg"
import CubistImage from "../../images/sponsors/cubist.png"
import FiveRingsImage from "../../images/sponsors/fiverings.png"
import FlowImage from "../../images/sponsors/flow.png"
import IMCImage from "../../images/sponsors/imc.png"
import JaneStreetImage from "../../images/sponsors/janestreet.png"
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
    name: "Two Sigma",
    tier: SponsorTier.Gold,
    image: TwoSigmaImage,
    link: "https://twosigma.com",
    text_md:
      "At Two Sigma, we use data science and technology to discover value in markets worldwide. Our community of scientists, technologists and academics collaborate to solve some of the most challenging economic problems. We don’t just wonder— we create systematic tools and technologies to forecast the future of global markets.",
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
    name: "IMC",
    tier: SponsorTier.Silver,
    image: IMCImage,
    link: "https://www.imc.com/us/",
  },
  {
    name: "Five Rings",
    tier: SponsorTier.Silver,
    image: FiveRingsImage,
    link: "https://www.fiverings.com/",
  },
  {
    name: "Flow Traders",
    tier: SponsorTier.Bronze,
    image: FlowImage,
    link: "https://www.flowtraders.com/",
  },
  {
    name: "Cubist",
    tier: SponsorTier.Bronze,
    image: CubistImage,
    link: "https://www.point72.com/cubist/",
  },
  {
    name: "Vatic",
    tier: SponsorTier.Bronze,
    image: VaticImage,
    link: "https://vaticlabs.ai",
  },
]