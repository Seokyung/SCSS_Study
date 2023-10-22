import { useNavigate, useParams } from "react-router-dom";
import Nesting from "../theories/01_Nesting";
import ParentSelector from "../theories/02_ParentSelector";
import AdvancedParentSelector from "../theories/03_AdvancedParentSelector";
import Selectors from "../theories/04_Selectors";
import VirtualClass from "../theories/05_VirtualClass";
import { AttributeSelectors } from "../theories/06_AttributeSelectors";

export const theoryList = [
	{
		id: 1,
		title: "01 선택과 중첩 (Nesting)",
		component: <Nesting />,
	},
	{
		id: 2,
		title: "02 부모 선택자 참조(&)와 주석처리",
		component: <ParentSelector />,
	},
	{
		id: 3,
		title: "03 부모 선택자 참조(&) 응용",
		component: <AdvancedParentSelector />,
	},
	{
		id: 4,
		title: "04 대표적인 CSS 선택자 SCSS에서 만들기",
		component: <Selectors />,
	},
	{
		id: 5,
		title: "05 부모 선택자 참조(&) 가상클래스",
		component: <VirtualClass />,
	},
	{
		id: 6,
		title: "06 부모 선택자 참조(&) 속성선택자",
		component: <AttributeSelectors />,
	},
];

function TheoryRouter() {
	const chapter = Number(useParams().chapter);
	const navigate = useNavigate();

	const renderTheoryComponent = () => {
		const newComponent = theoryList.filter((el) => chapter === el.id);
		return newComponent[0].component;
	};

	const gotoPrevPage = () => {
		navigate("/theories");
	};

	return (
		<div className="theory-container">
			<button id="prev-btn" onClick={gotoPrevPage}>
				✕
			</button>
			<div id="header">
				<h2>{theoryList[chapter - 1].title}</h2>
			</div>
			<div id="content">{renderTheoryComponent()}</div>
		</div>
	);
}

export default TheoryRouter;
