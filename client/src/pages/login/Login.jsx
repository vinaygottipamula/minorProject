import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  return (
    <div className="signup_container">
      <div className="signup_form_container">
      <div className="left">
					<h1>Create Account ?</h1>
					<Link to="/register">
						<button type="button" className="white_btn">
							SignUp
						</button>
					</Link>
				</div>
      <div className="right">
        <div className="lContainer">
		      <h2 className="head">Welcome Back!</h2>
          <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button disabled={loading} onClick={handleClick} className="lButton">
            Login
          </button>
		      {/* <h3 class="register">Don't have an Account? <a href="/register">Register</a></h3> */}
        {error && <span>{error.message}</span>}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Login;
