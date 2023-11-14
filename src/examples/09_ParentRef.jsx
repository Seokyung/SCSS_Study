import "../styles/examples/09_ParentRef.scss";
import visionImg1 from "../img/img2.jpg";
import visionImg2 from "../img/img7.jpg";

function ParentRef() {
	return (
		<div className="parent-ref-container">
			<section className="vision">
				<div className="vision-inner">
					<div className="vision-content">
						<div className="vision-item">
							<div className="vision-item-title">
								<h1>Vision Description</h1>
							</div>
							<div className="vision-item-img">
								<img src={visionImg1} alt="vision-img" />
							</div>
						</div>
						<div className="vision-item">
							<div className="vision-item-title">
								<h1>Vision Description</h1>
							</div>
							<div className="vision-item-img">
								<img src={visionImg2} alt="vision-img" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default ParentRef;
