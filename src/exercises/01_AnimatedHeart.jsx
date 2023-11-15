import { useState } from "react";
import "../styles/exercises/01_AnimatedHeart.scss";

function AnimatedHeart() {
	const [isChanged, setIsChanged] = useState(false);
	// const heartBeat = getComputedStyle(
	// 	document.querySelector(":root")
	// ).getPropertyValue("--beating-speed");

	const onBtnClick = () => {
		if (isChanged) {
			document
				.querySelector(":root")
				.style.setProperty("--beating-speed", "1s");
		} else {
			document
				.querySelector(":root")
				.style.setProperty("--beating-speed", "2s");
		}
		setIsChanged((prev) => !prev);
	};

	return (
		<div className="animated-heart-container">
			<div className="heart"></div>
			<button onClick={onBtnClick}>Change</button>
		</div>
	);
}

export default AnimatedHeart;
