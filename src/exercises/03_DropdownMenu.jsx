import "../styles/exercises/03_DropdownMenu.scss";

function DropdownMenu() {
	return (
		<div className="dropdown-menu-container">
			<ul className="dropdown-menu">
				<li className="category">
					<a href="#category">Categories</a>
				</li>
				<li className="main-menu">
					<a href="#shoes">Shoes</a>
					<div id="shoes" className="sub-menu">
						<a href="/">Lifestyle</a>
						<a href="/">Classics</a>
						<a href="/">Training + Gym</a>
						<a href="/">Running</a>
						<a href="/">Slides + Sandals</a>
					</div>
				</li>
				<li className="main-menu">
					<a href="#clothing">Clothing</a>
					<div id="clothing" className="sub-menu">
						<a href="/">Leggings</a>
						<a href="/">Bras</a>
						<a href="/">Dresses + Skirts</a>
						<a href="/">Tracksuits</a>
						<a href="/">Shorts</a>
						<a href="/">Pants</a>
						<a href="/">Essentials</a>
					</div>
				</li>
				<li className="main-menu">
					<a href="#accessories">Accessories</a>
					<div id="accessories" className="sub-menu">
						<a href="/">Bags + Backpacks</a>
						<a href="/">Socks</a>
						<a href="/">Hats</a>
						<a href="/">Sunglasses</a>
						<a href="/">Watches</a>
					</div>
				</li>
				<li className="main-menu">
					<a href="#sports">Sports</a>
					<div id="sports" className="sub-menu">
						<a href="/">Basketball</a>
						<a href="/">Running</a>
						<a href="/">Golf</a>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default DropdownMenu;
