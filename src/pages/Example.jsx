import { useNavigate } from "react-router-dom";
import { exampleList } from "../routes/ExampleRouter";

function Example() {
	const navigate = useNavigate();

	const gotoTheory = (chapter) => {
		navigate(`${chapter}`);
	};

	return (
		<div className="menu">
			<h1>핵심 이론 활용 예제</h1>
			<ul>
				{exampleList.map((item) => {
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

export default Example;
