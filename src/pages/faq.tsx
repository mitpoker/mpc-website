import React from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

const FAQ = () => {
	return <div className="max-w-prose mx-auto">
		<div className="px-2 flex flex-col">
			<h2 className="text-zinc-700 font-bold text-2xl mx-auto my-5 text-center">Frequently Asked Questions</h2>
			{content.map(({ question, answer }) => (
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

const content = [{
	question: "How can I become a Poker Club member?",
	answer: "Simply create an account on our website.You must attach your resume: we have strong connections with trading companies and your resume will be included in the resume booklet we present to our sponsors.Once you create an account on our website, you are officially a member of the MIT Poker Club! If you do not have a PokerStars username, you may leave that signup field blank temporarily(it is required for participating in the SIG Main Event Series and any online tournaments)"
}, {
	question: "How can I join the executive committee, and what are some of the responsibilities?",
	answer: "General members can attend our events, such as GBMs (general body meetings), tournaments, and talks. Committee members are officers that help organize these events, and are expected to attend and help out at all events. We hold weekly meetings to discuss logistics for upcoming events, plan future events, and decide the general direction of the club. Afterwards, we typically spend some time playing poker together, with an emphasis on discussion and learning. In addition, this year we will hold weekly workshops for new and old committee members alike to get a solid foundation on the decision making analysis behind poker. The application to join the executive committee will become available in the spring semester of 2021. We look forward to seeing your application!"
}, {
	question: "Who can participate in Poker Club events?",
	answer: "Please sign up to become a member! We welcome anyone to attend Poker Club events. However, you must be a member to attend our GBMs and SIG Main Event Series and be eligible to win prizes."
}, {
	question: "How can I qualify/participate in the SIG Main Event Series?",
	answer: "The SIG Main Event Series is a triannual invitational poker tournament organized by SIG. The Fall Main Event's date will soon be determined and is exclusive to MIT students. Stay updated on our Facebook page for more information. In order to qualify for the SIG Main Event, you must first become a member. Then, participate in one of the two online qualifier tournaments held on PokerStars, which will be announced in the fall semester. We will email out more logistical details in the future. Typically, the top 40 in each qualifier will be invited."
}, {
	question: "Why should I sponsor the Poker Club, and how can I become a sponsor?",
	answer: "If you are interested in learning more about sponsoring the Poker Club, please contact us at poker-exec@mit.edu. We can send you the official sponsorship package, which details the different levels of sponsorship and company benefits for each level."
}, {
	question: "As a sponsor, how can I access the resume book?",
	answer: "The resume book will be ready by the end of September or beginning of October, after we compile all of the resumes from new and returning members. We will reach out to each company at that time to email out the resume book. If there are any issues or you have any concerns, send an email to poker-exec@mit.edu."
},
]


export default FAQ