import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../userAuth/supabase";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined); // undefined initially
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    };

    fetchUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
