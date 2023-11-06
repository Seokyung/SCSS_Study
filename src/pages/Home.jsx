import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();

	const gotoMenus = (menu) => {
		navigate(`/${menu}`);
	};

	return (
		<div className="menu">
			<h1>SCSS 배우기</h1>
			<ul>
				<li>
					<span onClick={() => gotoMenus("theories")}>
						📘 핵심 이론 (Theories)
					</span>
				</li>
				<li>
					<span onClick={() => gotoMenus("examples")}>
						📚 핵심 이론 활용 예제 (Examples)
					</span>
				</li>
				<li>
					<span onClick={() => gotoMenus("exercises")}>
						👩🏻‍💻 실전 예제 (Exercises)
					</span>
				</li>
			</ul>
		</div>
	);
}

export default Home;
