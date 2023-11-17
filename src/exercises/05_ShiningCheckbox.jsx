import "../styles/exercises/05_ShiningCheckbox.scss";

function ShiningCheckbox() {
	return (
		<div className="shining-checkbox-container">
			<ul className="icon-box">
				<li>
					<label>
						<input type="checkbox" name="check-icon" />
						<div>
							<span className="material-symbols-outlined">
								power_settings_new
							</span>
						</div>
					</label>
				</li>

				<li>
					<label>
						<input type="checkbox" name="check-icon" />
						<div>
							<span className="material-symbols-outlined">light_mode</span>
						</div>
					</label>
				</li>

				<li>
					<label>
						<input type="checkbox" name="check-icon" />
						<div>
							<span className="material-symbols-outlined">flight</span>
						</div>
					</label>
				</li>

				<li>
					<label>
						<input type="checkbox" name="check-icon" />
						<div>
							<span className="material-symbols-outlined">bluetooth</span>
						</div>
					</label>
				</li>

				<li>
					<label>
						<input type="checkbox" name="check-icon" />
						<div>
							<span className="material-symbols-outlined">wifi</span>
						</div>
					</label>
				</li>

				<li>
					<label>
						<input type="checkbox" name="check-icon" />
						<div>
							<span className="material-symbols-outlined">settings</span>
						</div>
					</label>
				</li>
			</ul>
		</div>
	);
}

export default ShiningCheckbox;
