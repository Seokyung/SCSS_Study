import { useNavigate } from "react-router-dom";

function Navbar() {
	const navigate = useNavigate();

	const onPageClick = (page) => {
		navigate(`/${page}`);
	};

	return (
		<div className="nav">
			<div>
				<span onClick={() => onPageClick("")}>Home</span>
				<span onClick={() => onPageClick("theories")}>Theory</span>
				<span onClick={() => onPageClick("examples")}>Example</span>
				<span onClick={() => onPageClick("exercises")}>Exercise</span>
			</div>
		</div>
	);
}

export default Navbar;
