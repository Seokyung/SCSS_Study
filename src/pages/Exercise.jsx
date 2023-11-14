import { useNavigate } from "react-router-dom";
import { exerciseList } from "../routes/ExerciseRouter";

function Exercise() {
	const navigate = useNavigate();

	const gotoTheory = (chapter) => {
		navigate(`${chapter}`);
	};

	return (
		<div className="menu">
			<h1>실전 예제</h1>
			<ul>
				{exerciseList.map((item) => {
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

export default Exercise;
