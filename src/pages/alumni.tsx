import { PeopleList } from "@/lib/PeopleList"
import { members } from "@/lib/members"
import _ from "lodash"

const Officers = () => (
	<div className="w-full">
		<PeopleList people={_(members).filter(x => x.alum).sortBy(x => x.year).value()}></PeopleList>
	</div>
)

export default Officers