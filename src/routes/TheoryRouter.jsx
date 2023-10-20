import { useParams } from "react-router-dom";
import Nesting from "../theories/01_Nesting";
import ParentSelector from "../theories/02_ParentSelector";
import AdvancedParentSelector from "../theories/03_AdvancedParentSelector";

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
