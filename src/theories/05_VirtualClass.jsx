import "../styles/theories/05_VirtualClass.scss";

function VirtualClass() {
	return (
		<>
			<h2>05 부모 선택자 참조(&) 가상클래스</h2>
			<div className="virtual-class">
				<button className="virtual-class-btn">Apply</button>
				<hr />
				<div className="virtual-class-frame">
					<div>#01</div>
					<div>#02</div>
					<div>#03</div>
				</div>
			</div>
		</>
	);
}

export default VirtualClass;
