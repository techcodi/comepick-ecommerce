import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import supabase from "../userAuth/supabase";
import { Link } from "react-router-dom";
import "./UserLogin.css";
import { RxEyeOpen } from "react-icons/rx";
import { RxEyeClosed } from "react-icons/rx";

export default function UserLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const { user } = useAuth();
  const { register, handleSubmit, formState: isSubmitting } = useForm();
  const navigate = useNavigate();
  // async function onSubmitLogin(data) {
  //   const promise = supabase.auth.signInWithPassword({
  //     email: data.email,
  //     password: data.password,
  //   });

  //   toast.promise(promise, {
  //     loading: "Logging in...",
  //     success: "Login successful ",
  //     error: (error) => error.message,
  //   });

  //   const { data: sessionData, error } = await promise;

  //   if (!error) {
  //     const email = sessionData?.user?.email;
  //     if (email == isAdmin) {
  //       navigate("/");
  //     } else {
  //       navigate("/app");
  //     }
  //   }
  // }

  // useEffect(() => {
  //   if (user) {
  //     navigate("/app");
  //   }
  // }, [user, navigate]);

  // if (user === undefined) return <Loader />;

  async function onSubmitLogin(data) {
    const promise = supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    toast.promise(promise, {
      loading: "Logging in...",
      success: "Login successful",
      error: (error) => error.message,
    });

    const { data: sessionData, error } = await promise;

    if (!error) {
      const email = sessionData?.user?.email;
      if (user.email === "joshuaonaolapo1@gmail.com") {
        navigate("/admin-dashboard"); // Admin path
      } else {
        navigate("/app"); // User path
      }
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="form-box" onSubmit={handleSubmit(onSubmitLogin)}>
          <h2>Login In</h2>
          <label htmlFor="email">Name</label>
          <input
            type="email"
            placeholder="Email address"
            id="email"
            {...register("email")}
            required
          />
          <div className="password-wrap">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
              {...register("password")}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <RxEyeClosed /> : <RxEyeOpen />}
            </span>
          </div>
          <a className="forgot" href="#">
            forgot password
          </a>
          <button className="login-btn" type="submit">
            {" "}
            {isSubmitting ? "Log in" : "Logging in..."}
          </button>
          <p className="signup-link">
            <Link to="/auth-sign-up">Sign up</Link>
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
