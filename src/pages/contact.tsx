import ReactMarkdown from "react-markdown"

const Contact = () => {
	return <div className="max-w-prose mx-auto">
		<div className="px-2 flex flex-col py-3">
			<h2 className="text-zinc-700 font-bold text-2xl mx-auto my-5 text-center">Contact Information</h2>
			<div className="prose prose-zinc">
				<ReactMarkdown>
					{content}
				</ReactMarkdown>
			</div>
		</div>

	</div>
}

const content = `
For inquiries regarding sponsorships, events, tournaments, membership, or anything else, please contact us at [poker-exec@mit.edu](mailto:poker-exec@mit.edu).

Fill out [this form](https://forms.gle/yGTkQQr5x1qbLA969) to join our mailing list and participate in our events.

Follow us on [Instagram](https://www.instagram.com/mitpokerclub) or [Facebook](https://www.facebook.com/MITPokerClub/)!
`

export default Contact