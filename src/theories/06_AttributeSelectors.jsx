import { useState } from "react";
import "../styles/theories/06_AttributeSelectors.scss";

export function AttributeSelectors() {
	const [email, setEmail] = useState("");
	const [passwd, setPasswd] = useState("");
	const [isChecked, setIsChecked] = useState(true);

	const onValueChange = (e, setValue) => {
		const {
			target: { value },
		} = e;
		setValue(value);
	};

	const onCheckChange = (e) => {
		const {
			target: { checked },
		} = e;
		setIsChecked(checked);
	};

	return (
		<div className="attribute-selectors-sign-in">
			<h2>Sign In</h2>
			<div className="sign-in-inner">
				<input id="social-btn" type="button" value="Sign in with GOOGLE" />
				<input
					id="email"
					type="email"
					autoComplete="email"
					value={email}
					onChange={(e) => onValueChange(e, setEmail)}
				/>
				<input
					id="passwd"
					type="password"
					value={passwd}
					onChange={(e) => onValueChange(e, setPasswd)}
				/>
				<label htmlFor="remember-check">
					<input
						id="remember-check"
						type="checkbox"
						value={isChecked}
						checked={isChecked}
						onChange={onCheckChange}
					/>
					Remember me for 30 days
				</label>
				<input id="submit-btn" type="submit" value="Sign In" />
			</div>
		</div>
	);
}
