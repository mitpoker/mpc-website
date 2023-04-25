import { PeopleList } from "@/lib/PeopleList"
import { members } from "@/lib/members"

const Officers = () => (
	<div className="w-full">
		<PeopleList people={members.filter(x => !x.alum)}></PeopleList>
	</div>
)

export default Officers