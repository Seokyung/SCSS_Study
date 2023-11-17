import "../styles/exercises/06_LoginForm.scss";

function LoginForm() {
	return (
		<div className="login-form-container">
			<form className="login-form">
				<h1>Member Login</h1>
				<input type="text" placeholder="아이디" />
				<input type="password" placeholder="비밀번호" />
				<input type="email" placeholder="이메일" />
				<input type="submit" value="로그인" />
			</form>
		</div>
	);
}

export default LoginForm;
