import { useNavigate, useParams } from "react-router-dom";
import AnimatedHeart from "../exercises/01_AnimatedHeart";
import FigmaLogo from "../exercises/02_FigmaLogo";
import DropdownMenu from "../exercises/03_DropdownMenu";
import DropdownContent from "../exercises/04_DropdownContent";
import ShiningCheckbox from "../exercises/05_ShiningCheckbox";

export const exerciseList = [
	{
		id: 1,
		title: "01. 가상클래스를 활용한 살아있는 애니메이션 하트",
		component: <AnimatedHeart />,
	},
	{
		id: 2,
		title: "02. GRID와 변수를 활용해 피그마(Figma) 로고 만들기",
		component: <FigmaLogo />,
	},
	{
		id: 3,
		title: "03. 아코디언 드롭다운 메뉴 (Only CSS)",
		component: <DropdownMenu />,
	},
	{
		id: 4,
		title: "04. 아코디언 드롭다운 컨텐츠 (with JS)",
		component: <DropdownContent />,
	},
	{
		id: 5,
		title: "05. 빛나는 체크박스 버튼 만들기 (Variable, Color Function)",
		component: <ShiningCheckbox />,
	},
];

function ExerciseRouter() {
	const chapter = Number(useParams().chapter);
	const navigate = useNavigate();

	const renderExerciseComponent = () => {
		const newComponent = exerciseList.filter((el) => chapter === el.id);
		return newComponent[0].component;
	};

	const gotoPrevPage = () => {
		navigate("/exercises");
	};

	return (
		<div className="theory-container">
			<button id="prev-btn" onClick={gotoPrevPage}>
				<span className="material-symbols-outlined">close</span>
			</button>
			<div id="header">
				<h2>{exerciseList[chapter - 1].title}</h2>
			</div>
			<div id="content">{renderExerciseComponent()}</div>
		</div>
	);
}

export default ExerciseRouter;
