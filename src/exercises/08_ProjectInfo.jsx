import "../styles/exercises/08_ProjectInfo.scss";
import thumbnail_1 from "../img/web-portfolio-01.jpg";
import thumbnail_2 from "../img/web-portfolio-02.jpg";
import thumbnail_3 from "../img/web-portfolio-03.jpg";

function ProjectInfo() {
	return (
		<div className="project-info-container">
			<section className="portfolio">
				<div className="headline">
					<h1>Frontend Demo Portfolio</h1>
				</div>
				<div className="item-box">
					<aside className="item">
						<div className="portfolio-sub">
							<b>Toy Project</b>
							<span>2023.03 - 2023.06</span>
						</div>
						<h2>Rolling-Rolling</h2>
						<p>
							<q>웹으로 즐기는 추억의 롤링페이퍼</q>
						</p>
						<p className="portfolio-info">
							<b>Description</b>
							<span>
								웹으로 롤링페이퍼를 만들고 지인들과 공유할 수 있는 웹 서비스
							</span>
							<span>
								개인 프로젝트로 제작한 서비스로 1인 기획, 개발, 디자인, 배포,
								운영중
							</span>
						</p>
						<p className="portfolio-info">
							<b>What did I do</b>
							<span>서비스 기획</span>
							<span>전체 기능 개발</span>
							<span>Google Firebase를 이용해 서버, 데이터베이스 연결</span>
							<span>Redux를 이용해 상태 관리</span>
						</p>
						<p className="portfolio-info">
							<b>Tech Stack</b>
							<span>JavaScript, ReactJS, Redux, HTML/CSS, Firebase</span>
						</p>
						<p className="portfolio-info">
							<b>Link</b>
							<span>
								<a href="https://rolling-rolling.web.app/">Service</a>
							</span>
							<span>
								<a href="https://github.com/Seokyung/Rolling-Rolling">GitHub</a>
							</span>
						</p>
					</aside>
					<div className="item thumbnail">
						<div className="photo">
							<img src={thumbnail_1} alt="rolling-rolling-logo" />
						</div>
						<span className="portfolio-title">
							Preview #01
							<a className="btn-view pc" href="#pc">
								PC
							</a>
							<a className="btn-view mobile" href="#mobile">
								Mobile
							</a>
						</span>
					</div>
					<div className="item thumbnail">
						<div className="photo">
							<img src={thumbnail_2} alt="rolling-rolling-logo" />
						</div>
						<span className="portfolio-title">
							Preview #02
							<a className="btn-view pc" href="#pc">
								PC
							</a>
							<a className="btn-view mobile" href="#mobile">
								Mobile
							</a>
						</span>
					</div>
					<div className="item thumbnail">
						<div className="photo">
							<img src={thumbnail_3} alt="rolling-rolling-logo" />
						</div>
						<span className="portfolio-title">
							Preview #03
							<a className="btn-view pc" href="#pc">
								PC
							</a>
							<a className="btn-view mobile" href="#mobile">
								Mobile
							</a>
						</span>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ProjectInfo;
