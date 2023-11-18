import "../styles/exercises/07_BlogPost.scss";
import portfolio_1 from "../img/thum-portfolio-01.jpg";
import portfolio_2 from "../img/thum-portfolio-02.jpg";
import portfolio_3 from "../img/thum-portfolio-03.jpg";
import portfolio_4 from "../img/thum-portfolio-04.jpg";
import portfolio_5 from "../img/thum-portfolio-05.jpg";
import portfolio_6 from "../img/thum-portfolio-06.jpg";
import portfolio_7 from "../img/thum-portfolio-07.jpg";
import portfolio_8 from "../img/thum-portfolio-08.jpg";
import portfolio_9 from "../img/thum-portfolio-09.jpg";

const portfolioList = [
	{
		id: 1,
		imgUrl: portfolio_1,
	},
	{
		id: 2,
		imgUrl: portfolio_2,
	},
	{
		id: 3,
		imgUrl: portfolio_3,
	},
	{
		id: 4,
		imgUrl: portfolio_4,
		className: "focus",
	},
	{
		id: 5,
		imgUrl: portfolio_5,
	},
	{
		id: 6,
		imgUrl: portfolio_6,
	},
	{
		id: 7,
		imgUrl: portfolio_7,
	},
	{
		id: 8,
		imgUrl: portfolio_8,
	},
	{
		id: 9,
		imgUrl: portfolio_9,
	},
];

function BlogPost() {
	const renderPortfolioList = () => {
		return portfolioList.map((item) => {
			return (
				<div key={item.id} className={item.className ? item.className : ""}>
					<a href="#none">
						<img src={item.imgUrl} alt={`portfolio_${item.id}_thumbnail`} />
					</a>
					<i className="xi-plus-thin"></i>
					<span>Website Portfolio #0{item.id}</span>
				</div>
			);
		});
	};

	return (
		<div className="blog-post-container">
			<section className="portfolio">
				<h1>
					Frontend Demo <span>Portfolio</span>
				</h1>
				<div className="item-box">{renderPortfolioList()}</div>
			</section>
		</div>
	);
}

export default BlogPost;
