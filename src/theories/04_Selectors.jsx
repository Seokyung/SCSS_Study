import "../styles/theories/04_Selectors.scss";

function Selectors() {
	return (
		<>
			<h2>04 대표적인 CSS 선택자 SCSS에서 만들기</h2>
			<div className="selectors">
				<button className="btn confirm">Confirm</button>
				<button className="btn warning">Warning</button>
				{/* <a>태그 선택자</a>
				<a className="selectors-red">클래스 선택자</a>
				<a id="selectors-red">아이디 선택자</a>
				<span>태그와 함께 쓰는 선택자</span> */}
			</div>
		</>
	);
}

export default Selectors;
