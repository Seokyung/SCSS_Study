import { useState } from "react";
import "../styles/exercises/04_DropdownContent.scss";

function DropdownContent() {
	const [flagList, setFlagList] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
	]);

	const onFaqClick = (idx, titleId, contentId) => {
		const faqTitle = document.getElementById(titleId);
		const faqContent = document.getElementById(contentId);

		if (flagList[idx]) {
			faqTitle.classList.remove("active");
			faqContent.classList.remove("show");
			setFlagList([
				...flagList.slice(0, idx),
				false,
				...flagList.slice(idx + 1, flagList.length),
			]);
		} else {
			faqTitle.classList.add("active");
			faqContent.classList.add("show");
			setFlagList([
				...flagList.slice(0, idx),
				true,
				...flagList.slice(idx + 1, flagList.length),
			]);
		}
	};

	return (
		<div className="dropdown-content-container">
			<section className="faq">
				<div className="faq-inner">
					<h1>Frequently Asked Questions</h1>
					<div
						id="faq1-title"
						className="faq-title"
						onClick={() => onFaqClick(0, "faq1-title", "faq1-content")}
					>
						What is Netflix?
					</div>
					<div id="faq1-content" className="faq-content">
						<div>
							Netflix is a streaming service that offers a wide variety of
							award-winning TV shows, movies, anime, documentaries, and more on
							thousands of internet-connected devices.
							<br />
							You can watch as much as you want, whenever you want without a
							single commercial – all for one low monthly price. There's always
							something new to discover and new TV shows and movies are added
							every week!
						</div>
					</div>

					<div
						id="faq2-title"
						className="faq-title"
						onClick={() => onFaqClick(1, "faq2-title", "faq2-content")}
					>
						How much does Netflix cost?
					</div>
					<div id="faq2-content" className="faq-content">
						<div>
							Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
							streaming device, all for one fixed monthly fee. Plans range from
							KRW9,500 to KRW14,500 a month. No extra costs, no contracts.
						</div>
					</div>

					<div
						id="faq3-title"
						className="faq-title"
						onClick={() => onFaqClick(2, "faq3-title", "faq3-content")}
					>
						Where can I watch?
					</div>
					<div id="faq3-content" className="faq-content">
						<div>
							Watch anywhere, anytime, on an unlimited number of devices. Sign
							in with your Netflix account to watch instantly on the web at
							netflix.com from your personal computer or on any
							internet-connected device that offers the Netflix app, including
							smart TVs, smartphones, tablets, streaming media players and game
							consoles.
							<br />
							You can also download your favorite shows with the iOS, Android,
							or Windows 10 app. Use downloads to watch while you're on the go
							and without an internet connection. Take Netflix with you
							anywhere.
						</div>
					</div>

					<div
						id="faq4-title"
						className="faq-title"
						onClick={() => onFaqClick(3, "faq4-title", "faq4-content")}
					>
						How do I cancel?
					</div>
					<div id="faq4-content" className="faq-content">
						<div>
							Netflix is flexible. There are no pesky contracts and no
							commitments. You can easily cancel your account online in two
							clicks. There are no cancellation fees – start or stop your
							account anytime.
						</div>
					</div>

					<div
						id="faq5-title"
						className="faq-title"
						onClick={() => onFaqClick(4, "faq5-title", "faq5-content")}
					>
						What can I watch on Netflix?
					</div>
					<div id="faq5-content" className="faq-content">
						<div>
							Netflix has an extensive library of feature films, documentaries,
							TV shows, anime, award-winning Netflix originals, and more. Watch
							as much as you want, anytime you want.
						</div>
					</div>

					<div
						id="faq6-title"
						className="faq-title"
						onClick={() => onFaqClick(5, "faq6-title", "faq6-content")}
					>
						Is Netflix good for kids?
					</div>
					<div id="faq6-content" className="faq-content">
						<div>
							The Netflix Kids experience is included in your membership to give
							parents control while kids enjoy family-friendly TV shows and
							movies in their own space.
							<br />
							Kids profiles come with PIN-protected parental controls that let
							you restrict the maturity rating of content kids can watch and
							block specific titles you don’t want kids to see.
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default DropdownContent;
