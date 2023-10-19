import { useNavigate } from "react-router-dom";

const theoryList = [
	{
		id: 1,
		title: "01 선택과 중첩 (Nesting)",
	},
	{
		id: 2,
		title: "02 부모 선택자 참조(&)와 주석처리",
	},
];

function Theory() {
	const navigate = useNavigate();

	const gotoTheory = (chapter) => {
		navigate(`${chapter}`, { replace: true });
	};

	return (
		<div className="menu">
			<h1>핵심 이론</h1>
			<ul>
				{theoryList.map((item) => {
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

export default Theory;
