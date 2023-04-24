import ReactMarkdown from 'react-markdown'
import { Sponsor, SponsorData, SponsorTier } from '@/data/sponsors'
import Image from "next/image"

const tiers = Object.values(SponsorTier).filter(value => typeof value === 'string') as string[]

const Sponsors = () => {
	return <div className="max-w-prose mx-auto">
		<div className="px-2 flex flex-col py-3">
			<h2 className="text-zinc-700 font-bold text-2xl mx-auto my-5 text-center">Sponsors</h2>
			<div className="prose prose-zinc">
				{tiers.map((t, i) => (
					<SponsorsAtTier key={i} tier={t} sponsors={SponsorData.filter(s => s.tier == t)}></SponsorsAtTier>
				))}
			</div>
		</div>
	</div>
}

const SponsorsAtTier = ({ tier, sponsors }: { tier: string, sponsors: Array<Sponsor> }) => {
	return <div>
		{tier}
		{
			sponsors.map((s, i) => (
				<div key={i}>
					<Image {...s.image} alt={s.name}></Image>
					<ReactMarkdown>
						{s.text_md!}
					</ReactMarkdown>
				</div>
			))
		}
	</div>
}

export default Sponsors