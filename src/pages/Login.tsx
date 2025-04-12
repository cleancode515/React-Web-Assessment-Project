import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "@/app/features/authSlice";
import { authService } from "@/services/authService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const { toast } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if user is already authenticated
    if (authService.isAuthenticated()) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        dispatch(loginSuccess(JSON.parse(storedUser)));
      }
    }
  }, [dispatch]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
    };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    dispatch(loginStart());

    try {
      const response = await authService.login({ email, password });
      dispatch(loginSuccess(response.user));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Login failed";
      dispatch(loginFailure(errorMessage));
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated && user) {
    return <Navigate to={user.role === "ADMIN" ? "/admin" : "/user"} replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-zinc-900 rounded-lg shadow-xl border border-zinc-800">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
          <p className="mt-2 text-zinc-400">Sign in to your account</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-400"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) {
                    setErrors((prev) => ({ ...prev, email: "" }));
                  }
                }}
                className={`mt-1 block w-full px-3 py-2 bg-zinc-800 border ${
                  errors.email ? "border-red-500" : "border-zinc-700"
                } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-400"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) {
                    setErrors((prev) => ({ ...prev, password: "" }));
                  }
                }}
                className={`mt-1 block w-full px-3 py-2 bg-zinc-800 border ${
                  errors.password ? "border-red-500" : "border-zinc-700"
                } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors duration-200"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </div>

          <div className="text-center text-sm text-zinc-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-500 hover:text-blue-400 transition-colors duration-200"
            >
              Sign up
            </Link>
          </div>

          <div className="text-center text-xs text-zinc-500">
            <p>Demo Credentials:</p>
            <p>Admin: admin@gmail.com / password123</p>
            <p>User: user@gmail.com / password123</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
