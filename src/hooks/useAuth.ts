import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { logout, loginSuccess } from "../app/features/authSlice";

export const useAuth = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch = useDispatch();

  const login = async (email: string, password: string) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      dispatch(loginSuccess(data));
      return true;
    }
    return false;
  };

  const signOut = () => {
    dispatch(logout());
  };

  return {
    ...auth,
    login,
    logout: signOut,
  };
};
