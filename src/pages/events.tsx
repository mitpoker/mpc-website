const Events = () => {
	return (
		<div className="w-full flex flex-col items-center">
			<h2 className="text-zinc-700 font-bold text-2xl mx-auto my-5 text-center">Upcoming Events</h2>
			<iframe src="https://calendar.google.com/calendar/embed?src=mitpokerexec%40gmail.com&ctz=America%2FNew_York" style={{ border: 0 }} width="80%" height={"700"}></iframe>
		</div>
	)
}

export default Events