import { useNavigate } from "react-router-dom";

function Navbar() {
	const navigate = useNavigate();

	const onPageClick = (page) => {
		navigate(`/${page}`, { replace: true });
	};

	return (
		<div>
			<a href="/" onClick={() => onPageClick("")}>
				Home
			</a>
			/
			<a href="/theories" onClick={() => onPageClick("theories")}>
				Theory
			</a>
			/
			<a href="/examples" onClick={() => onPageClick("examples")}>
				Example
			</a>
		</div>
	);
}

export default Navbar;
