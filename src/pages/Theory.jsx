import { useNavigate } from "react-router-dom";
import { theoryList } from "../routes/TheoryRouter";

function Theory() {
	const navigate = useNavigate();

	const gotoTheory = (chapter) => {
		navigate(`${chapter}`);
	};

	return (
		<div className="menu">
			<h1>핵심 이론</h1>
			<ul>
				{theoryList.map((item) => {
					return (
						<li key={item.id}>
							<span onClick={() => gotoTheory(item.id)}>{item.title}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Theory;
