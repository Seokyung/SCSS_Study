import "../styles/examples/05_ReuseEffects.scss";
import img_1 from "../img/img5.jpg";
import img_2 from "../img/img4.jpg";
import img_3 from "../img/img1.jpg";

function ReuseEffects() {
	return (
		<div className="reuse-effects-container">
			<div className="card-box">
				<div className="card">
					<a
						href="https://www.imdb.com/title/tt0245429/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_spirited"
						target="_blank"
						rel="noreferrer"
					>
						<img src={img_1} alt="Spirited_Away" />
					</a>
				</div>
				<div className="card">
					<a
						href="https://www.imdb.com/title/tt0347149/?ref_=nv_sr_srsg_2_tt_8_nm_0_q_howls%2520mo"
						target="_blank"
						rel="noreferrer"
					>
						<img src={img_2} alt="Howls_Moving_Castle" />
					</a>
				</div>
				<div className="card">
					<a
						href="https://www.imdb.com/title/tt0097814/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Kiki%27s%2520Delivery%2520Service"
						target="_blank"
						rel="noreferrer"
					>
						<img src={img_3} alt="Kikis_Delivery_Service" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default ReuseEffects;
