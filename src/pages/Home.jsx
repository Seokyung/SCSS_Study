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
					<span onClick={() => gotoMenus("theories")}>핵심 이론</span>
				</li>
				<li>
					<span onClick={() => gotoMenus("examples")}>핵심 이론 예제</span>
				</li>
			</ul>
		</div>
	);
}

export default Home;
