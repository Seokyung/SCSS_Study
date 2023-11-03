import { useNavigate, useParams } from "react-router-dom";
import Nesting from "../theories/01_Nesting";
import ParentSelector from "../theories/02_ParentSelector";
import AdvancedParentSelector from "../theories/03_AdvancedParentSelector";
import Selectors from "../theories/04_Selectors";
import VirtualClass from "../theories/05_VirtualClass";
import AttributeSelectors from "../theories/06_AttributeSelectors";
import AtRoot from "../theories/07_AtRoot";
import Prefix from "../theories/08_Prefix";
import VirtualClassIs from "../theories/09_VirtualClassIs";
import Variables from "../theories/10_Variables";
import VariablesGrid from "../theories/11_VariablesGrid";
import ImportFile from "../theories/12_ImportFile";
import Operators from "../theories/13_Operators";

export const theoryList = [
	{
		id: 1,
		title: "01. 선택과 중첩 (Nesting)",
		component: <Nesting />,
	},
	{
		id: 2,
		title: "02. 부모 선택자 참조(&)와 주석처리",
		component: <ParentSelector />,
	},
	{
		id: 3,
		title: "03. 부모 선택자 참조(&) 응용",
		component: <AdvancedParentSelector />,
	},
	{
		id: 4,
		title: "04. 대표적인 CSS 선택자 SCSS에서 만들기",
		component: <Selectors />,
	},
	{
		id: 5,
		title: "05. 부모 선택자 참조(&) 가상클래스",
		component: <VirtualClass />,
	},
	{
		id: 6,
		title: "06.부모 선택자 참조(&) 속성선택자",
		component: <AttributeSelectors />,
	},
	{
		id: 7,
		title: "07. 부모 선택자 중첩 나가기 @at-root",
		component: <AtRoot />,
	},
	{
		id: 8,
		title: "08. 접두어(prefix) 사용해서 CSS 속성 자동생성",
		component: <Prefix />,
	},
	{
		id: 9,
		title: "09. 가상클래스 :is로 선택자 중복 줄이기",
		component: <VirtualClassIs />,
	},
	{
		id: 10,
		title: "10. 변수(Variables)",
		component: <Variables />,
	},
	{
		id: 11,
		title: "11. 변수 사용하여 Grid 만들기",
		component: <VariablesGrid />,
	},
	{
		id: 12,
		title: "12. @import 활용 - 외부파일 가져오기",
		component: <ImportFile />,
	},
	{
		id: 13,
		title: "13. 연산자(Operators)",
		component: <Operators />,
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
				<span className="material-symbols-outlined">close</span>
			</button>
			<div id="header">
				<h2>{theoryList[chapter - 1].title}</h2>
			</div>
			<div id="content">{renderTheoryComponent()}</div>
		</div>
	);
}

export default TheoryRouter;
