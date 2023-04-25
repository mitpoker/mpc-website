import { Member } from "./members"
import Image from "next/image"

export const PeopleList = ({ people }: { people: Array<Member> }) => (
	<div className="mx-auto">
		{people.map((person, index) => (
			<PersonEntry key={index} index={index} info={person} />
		))}
	</div>
)

const PersonEntry = ({ info, index }: { info: Member, index: number }) => {
	const isReversed = index % 2 == 1

	return (
		<div className={`mx-auto max-w-fit w-[75ch] flex gap-7 mt-10 border-zinc-100 p-3 rounded-md shadow-sm flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} `}>
			<div className="w-full md:w-1/4 flex flex-col justify-center">
				<Image src={info.image} style={{ borderRadius: '5px' }} alt={info.name} />
			</div>
			<div className="flex flex-col w-full md:w-3/4 justify-center">
				<p> <span className="font-semibold text-xl text-zinc-700"> {info.name} </span> <span className="text-zinc-500">{info.year}</span></p>
				<p className="text-zinc-600 text-justify prose">{info.bio}</p>
			</div>
		</div>
	)
}