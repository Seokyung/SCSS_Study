import { useParams } from "react-router-dom";
import Nesting from "../theories/01_Nesting";
import ParentSelector from "../theories/02_ParentSelector";

function TheoryRouter() {
	const chapter = Number(useParams().chapter);

	const renderLevelComponent = () => {
		switch (chapter) {
			case 1:
				return <Nesting />;
			case 2:
				return <ParentSelector />;
			default:
				return;
		}
	};

	return <div>{renderLevelComponent()}</div>;
}

export default TheoryRouter;
