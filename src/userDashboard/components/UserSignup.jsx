import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import supabase from "../userAuth/supabase";
import { RxEyeOpen } from "react-icons/rx";
import { RxEyeClosed } from "react-icons/rx";
import "./UserSignUp.css";
import { useState } from "react";
function UserSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: isSubmitting } = useForm();
  const navigate = useNavigate();
  async function onSubmit(data) {
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        emailRedirectTo: `${window.location.origin}/app`, // or your dashboard route
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Signup successful! Check your email to confirm.");
      navigate("/auth-login");
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="form-box" onSubmit={handleSubmit(onSubmit)}>
          <h2>Sign Up</h2>
          <div className="input-wrap">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Email address"
              id="email"
              {...register("email")}
              required
            />
          </div>
          <div className="password-wrap">
            <label htmlFor="password">Password</label>
            <div className="input-wrap">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                {...register("password")}
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <RxEyeOpen /> : <RxEyeClosed />}
              </span>
            </div>
          </div>
          <a className="forgot" href="#">
            forgot password
          </a>
          <button className="login-btn" type="submit">
            {isSubmitting ? "Sign up" : "Loading..."}
          </button>
          <p className="signup-link">
            <small>Already have account?</small>
            <Link to="/auth-login">Log in</Link>
          </p>
          <div className="social-icons">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
            />
          </div>
        </form>
      </div>
      <div className="cart-area">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          width="200px"
          height="200px"
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7.01 9l.94 2h8.19c.75 0 1.41-.41 1.75-1.03l3.58-6.49a.998.998 0 00-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03L20.6 4H5.21z" />
        </svg>
      </div>
    </div>
  );
}

export default UserSignup;
