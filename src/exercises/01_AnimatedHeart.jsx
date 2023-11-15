import { useState } from "react";
import "../styles/exercises/01_AnimatedHeart.scss";

function AnimatedHeart() {
	const [beatingSpeed, setBeatingSpeed] = useState(1);

	const onSpeedChange = (e) => {
		const {
			target: { value },
		} = e;
		document
			.querySelector(":root")
			.style.setProperty("--beating-speed", `${value}s`);
		setBeatingSpeed(value);
	};

	return (
		<div className="animated-heart-container">
			<div className="heart"></div>
			<div className="speed-range">
				<input
					type="range"
					id="speed"
					name="speed"
					min="0"
					max="5"
					step="0.1"
					list="speed-markers"
					className="slider"
					value={beatingSpeed}
					onChange={onSpeedChange}
				/>
				<label htmlFor="speed">{beatingSpeed}</label>
			</div>
		</div>
	);
}

export default AnimatedHeart;
