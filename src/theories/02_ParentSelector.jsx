import { useState } from "react";
import "../styles/theories/css/02_ParentSelector.css";

function ParentSelector() {
	const [isBtnClicked, setIsBtnClicked] = useState(false);

	const onBtnClick = () => {
		setIsBtnClicked((prev) => !prev);
	};

	return (
		<>
			<h2>02 부모 선택자 참조(&)와 주석처리</h2>
			<div className="parent-selector-btn-outer">
				<div className="btn" onClick={onBtnClick}>
					What is '&'?
				</div>
				{isBtnClicked && (
					<>
						<span>
							&(Ampersand) is a Parent selector.
							<br />
							You can access to outer selector in nested selector by using this.
						</span>
						<span id="annotation">
							scss 파일에서 줄 주석을 하면 css파일에선 아예 삭제된다.
							<br />
							{"/**/"}로 주석처리를 해주면 css 파일에서도 주석처리된 것으로
							보인다.
						</span>
					</>
				)}
			</div>
		</>
	);
}

export default ParentSelector;