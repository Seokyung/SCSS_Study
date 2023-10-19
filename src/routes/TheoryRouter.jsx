import { useParams } from "react-router-dom";
import Nesting from "../theories/01_Nesting";
import ParentSelector from "../theories/02_ParentSelector";

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
];

function TheoryRouter() {
	const chapter = Number(useParams().chapter);

	const renderTheoryComponent = () => {
		const newComponent = theoryList.filter((el) => chapter === el.id);
		return newComponent[0].component;
	};

	return <div className="theory-container">{renderTheoryComponent()}</div>;
}

export default TheoryRouter;
