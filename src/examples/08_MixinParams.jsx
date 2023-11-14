import "../styles/examples/08_MixinParams.scss";

function MixinParams() {
	return (
		<div className="mixin-params-container">
			<div className="figure-box">
				{/* 에밋 단축키: .figure${box$}*8 */}
				<div className="figure1">box1</div>
				<div className="figure2">box2</div>
				<div className="figure3">box3</div>
				<div className="figure4">box4</div>
				<div className="figure5">box5</div>
				<div className="figure6">box6</div>
				<div className="figure7">box7</div>
				<div className="figure8">box8</div>
			</div>
		</div>
	);
}

export default MixinParams;
