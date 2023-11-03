import "../styles/theories/12_ImportFile.scss";

export default function ImportFile() {
	return (
		<div className="import-file-container">
			<h1>Scss @import rule</h1>
			<div className="local-file-container">
				<p>
					Sass extends CSS’s @import rule with the ability to import Sass and
					CSS stylesheets, providing access to mixins, functions, and variables
					and combining multiple stylesheets’ CSS together. Unlike plain CSS
					imports, which require the browser to make multiple HTTP requests as
					it renders your page, Sass imports are handled entirely during
					compilation.
				</p>
			</div>
			<div className="imported-file-container">
				<h4>What’s Wrong With @import?</h4>
				<h5>The @import rule has a number of serious issues:</h5>
				<ul>
					<li>
						@import makes all variables, mixins, and functions globally
						accessible. This makes it very difficult for people (or tools) to
						tell where anything is defined.
					</li>
					<li>
						Because everything’s global, libraries must add a prefix to all
						their members to avoid naming collisions.
					</li>
					<li>
						@extend rules are also global, which makes it difficult to predict
						which style rules will be extended.
					</li>
					<li>
						Each stylesheet is executed and its CSS emitted every time it’s
						@imported, which increases compilation time and produces bloated
						output.
					</li>
					<li>
						There was no way to define private members or placeholder selectors
						that were inaccessible to downstream stylesheets.
					</li>
				</ul>
			</div>
		</div>
	);
}
