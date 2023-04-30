import ReactMarkdown from 'react-markdown'
import { Sponsor, SponsorData, SponsorTier } from '@/lib/sponsors'
import Image from "next/image"
import _ from 'lodash'
import Link from 'next/link'

const tiers = Object.values(SponsorTier).filter(value => typeof value === 'string') as SponsorTier[]

const tierConfig: Record<SponsorTier, { width: string, ownLine: boolean, grid: string }> = {
	[SponsorTier.Platinum]: { width: "", grid: "grid-cols-1", ownLine: true },
	[SponsorTier.Gold]: { width: "w-2/3 md:w-1/2", grid: "grid-cols-1", ownLine: true },
	[SponsorTier.Silver]: { width: "w-full md:w-2/3", grid: "grid-cols-1", ownLine: false },
	[SponsorTier.Bronze]: { width: "w-full md:w-2/3", grid: "grid-cols-1", ownLine: false },
}

const Sponsors = () => {
	return <div className="max-w-prose mx-auto">
		<div className="px-2 flex flex-col py-3">
			<div className="prose prose-zinc">
				{tiers.map((t, i) => (
					<SponsorsAtTier key={i} tier={t} sponsors={SponsorData.filter(s => s.tier == t)}></SponsorsAtTier>
				))}
			</div>
		</div>
	</div>
}

const SponsorsAtTier = ({ tier, sponsors }: { tier: SponsorTier, sponsors: Array<Sponsor> }) => {
	const { width: imageWidth, grid: gridConfig, ownLine } = tierConfig[tier]
	const tierTitle = `${_.capitalize(tier)} Sponsor${sponsors.length > 1 ? 's' : ''}`

	const sameLineSponsorStyling = `grid ${gridConfig} gap-5 items-center`
	const ownLineSponsorStyling = `flex flex-col gap-5 items-center`

	return <div className="mb-10">
		<h2 className="text-zinc-700 font-bold text-3xl mx-auto my-5 text-center">{tierTitle}</h2>
		<div className={ownLine ? ownLineSponsorStyling : sameLineSponsorStyling}>{
			_.shuffle(sponsors).map((s, i) => (
				<div key={i} className="text-justify">
					<Link href={s.link} target="_blank">
						<Image {...s.image} alt={s.name} className={"mx-auto " + imageWidth}></Image>
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
