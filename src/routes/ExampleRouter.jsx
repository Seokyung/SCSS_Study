import { useNavigate, useParams } from "react-router-dom";
import SelectorVirtualClass from "../examples/01_SelectorVirtualClass";
import ResetNormalize from "../examples/02_ResetNormalize";
import NestedMixin from "../examples/03_NestedMixin";
import MixinArray from "../examples/04_MixinArray";
import ReuseEffects from "../examples/05_ReuseEffects";
import AdvancedExtend from "../examples/06_AdvancedExtend";
import PlaceholderConnect from "../examples/07_PlaceholderConnect";
import MixinParams from "../examples/08_MixinParams";
import ParentRef from "../examples/09_ParentRef";

export const exampleList = [
	{
		id: 1,
		title: "01. 주요 CSS 선택자, 주요 가상클래스 활용하기",
		component: <SelectorVirtualClass />,
	},
	{
		id: 2,
		title: "02. @import로 reset.css와 normalize.css 연결하기",
		component: <ResetNormalize />,
	},
	{
		id: 3,
		title: "03. @mixin을 중첩해 텍스트 서식 설정하기",
		component: <NestedMixin />,
	},
	{
		id: 4,
		title:
			"04. @mixin 배열(Array)에 매개변수 사용하고 @include로 인수 반환하기",
		component: <MixinArray />,
	},
	{
		id: 5,
		title: "05. @mixin과 @include로 자주 사용하는 이펙트 재사용",
		component: <ReuseEffects />,
	},
	{
		id: 6,
		title:
			"06. 특정 선택자 CSS 속성 가져오는 @extend를 활용한 CSS 디자인 재사용",
		component: <AdvancedExtend />,
	},
	{
		id: 7,
		title: "07. 플레이스 홀드(%) 선택자로 CSS 선택자를 연결선택자로 정리하기",
		component: <PlaceholderConnect />,
	},
	{
		id: 8,
		title: "08. @mixin에 매개변수를 활용하여 다양한 border-radius 만들기",
		component: <MixinParams />,
	},
	{
		id: 9,
		title: "09. 부모요소 참조하여 일관성 있는 html 레이아웃 구조 만들기",
		component: <ParentRef />,
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
