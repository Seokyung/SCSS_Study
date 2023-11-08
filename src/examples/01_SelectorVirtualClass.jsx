import "../styles/examples/01_SelectorVirtualClass.scss";

function SelectorVirtualClass() {
	return (
		<div className="selector-container">
			<a href="/">Go to Main Page</a>

			<hr />

			<section>
				<h1>Section Headline</h1>
				<div className="section-inner">
					<div className="items">
						<div className="item">Item #01</div>
						<div className="item">Item #02</div>
						<div className="item">Item #03</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default SelectorVirtualClass;
