import { useNavigate, useParams } from "react-router-dom";
import SelectorVirtualClass from "../examples/01_SelectorVirtualClass";

export const exampleList = [
	{
		id: 1,
		title: "01. 주요 CSS 선택자, 주요 가상클래스 활용하기",
		component: <SelectorVirtualClass />,
	},
];

function ExampleRouter() {
	const chapter = Number(useParams().chapter);
	const navigate = useNavigate();

	const renderExampleComponent = () => {
		const newComponent = exampleList.filter((el) => chapter === el.id);
		return newComponent[0].component;
	};

	const gotoPrevPage = () => {
		navigate("/examples");
	};

	return (
		<div className="theory-container">
			<button id="prev-btn" onClick={gotoPrevPage}>
				<span className="material-symbols-outlined">close</span>
			</button>
			<div id="header">
				<h2>{exampleList[chapter - 1].title}</h2>
			</div>
			<div id="content">{renderExampleComponent()}</div>
		</div>
	);
}

export default ExampleRouter;
