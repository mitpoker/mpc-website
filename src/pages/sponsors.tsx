import ReactMarkdown from 'react-markdown'
import { Sponsor, SponsorData, SponsorTier } from '@/data/sponsors'
import Image from "next/image"
import _ from 'lodash'
import Link from 'next/link'

const tiers = Object.values(SponsorTier).filter(value => typeof value === 'string') as SponsorTier[]

const tierConfig: Record<SponsorTier, { width: string, text: boolean }> = {
	[SponsorTier.Platinum]: { width: "grid-cols-1", text: true },
	[SponsorTier.Gold]: { width: "grid-cols-2", text: true },
	[SponsorTier.Silver]: { width: "grid-cols-2", text: false },
	[SponsorTier.Bronze]: { width: "grid-cols-3", text: false },
}

const Sponsors = () => {
	return <div className="max-w-prose mx-auto">
		<div className="px-2 flex flex-col py-3">
			{/* <h2 className="text-zinc-700 font-bold text-2xl mx-auto my-5 text-center">Sponsors</h2> */}
			<div className="prose prose-zinc">
				{tiers.map((t, i) => (
					<SponsorsAtTier key={i} tier={t} sponsors={SponsorData.filter(s => s.tier == t)}></SponsorsAtTier>
				))}
			</div>
		</div>
	</div>
}

const SponsorsAtTier = ({ tier, sponsors }: { tier: SponsorTier, sponsors: Array<Sponsor> }) => {
	const { width: imageWidth, text } = tierConfig[tier]
	return <div>
		<h2 className="text-zinc-700 font-bold text-xl mx-auto my-5 text-center">{_.capitalize(tier) + " Sponsors"}</h2>
		<div className={text ? "" : `grid gap-5 ${imageWidth} items-center` /*"flex flex-row items-center"*/}>{
			_.shuffle(sponsors).map((s, i) => (
				<div key={i} className="">
					<Link href={s.link} target="_blank">
						<Image {...s.image} alt={s.name} className={" mx-auto"}></Image>
					</Link>
					<ReactMarkdown>
						{s.text_md!}
					</ReactMarkdown>
				</div>
			))
		}
		</div>
	</div >
}

export default Sponsors