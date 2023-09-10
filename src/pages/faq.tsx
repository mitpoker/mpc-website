import React from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

const FAQ = () => {
	const rawPairs = content.trim().split('\n\n\n')
	const qa = rawPairs.map(pair => ({
		question: pair.split('\n')[0],
		answer: pair.split('\n').slice(1).join('\n')
	}))
	return <div className="max-w-prose mx-auto">
		<div className="px-2 flex flex-col">
			<h2 className="text-zinc-700 font-bold text-2xl mx-auto my-5 text-center">Frequently Asked Questions</h2>
			{qa.map(({ question, answer }) => (
				<div key={question} className="py-3">
					<div className="font-bold text-zinc-800 prose prose-zinc">
						<ReactMarkdown>
							{question}
						</ReactMarkdown>
					</div>
					<div className="text-zinc-500 prose prose-zinc text-justify">
						<ReactMarkdown>
							{answer}
						</ReactMarkdown>
					</div>
				</div>
			))}
		</div>

	</div>
}

const content = `
What is MIT Poker Club?
MIT Poker Club is a student organization based at MIT, dedicated to fostering a passion for poker among its members. 


How can I get involved with MIT Poker Club?
There are two ways to get involved. The first way is as a a general member - we warmly welcome all MIT students to become general members of the MIT Poker Club. Members will have the opportunity to attend all of our club's events, which include weekly meetings, casino nights, workshops, and tournaments. The second way is as a member of the executive committee, which is a close-knit group comprised of approximately 15-20 poker-loving undergraduates. Their main responsibility is to organize and manage all the club's events and activities, ensuring an enjoyable experience for all members. The committee also leads an internal education program, where executive members have the opportunity to study poker together. Additionally, they enjoy a variety of social events, such as dinners and retreats. 


How can I join as a general member?
It’s really easy! Sign up for our [mailing list](https://docs.google.com/forms/d/e/1FAIpQLSeGep1nxtPsViv6yt3ES11LZaJ4sKhfP5G9OfDE_ahrExakJg/viewform).


How can I join the executive committee?
Applications for the executive committee typically happen every fall. To get notified when our applications open, sign up for our [mailing list](https://docs.google.com/forms/d/e/1FAIpQLSeGep1nxtPsViv6yt3ES11LZaJ4sKhfP5G9OfDE_ahrExakJg/viewform).


How can I become a sponsor?
If you are interested in sponsoring MIT Poker Club, we encourage you to get in touch with us at *[poker-exec@mit.edu](mailto:poker-exec@mit.edu)*. We will provide you with our official sponsorship package, which outlines the various levels of sponsorship and the associated benefits that you can enjoy at each level.`

export default FAQ
