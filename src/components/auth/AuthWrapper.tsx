import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Dashboard from "../Dashboard";

const AuthWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const handleLogin = (email: string, password: string) => {
    // Demo login - accept any credentials
    setUser({ name: "Demo User", email });
    setIsAuthenticated(true);
  };

  const handleRegister = (name: string, email: string, password: string) => {
    // Demo registration - accept any credentials
    setUser({ name, email });
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  // Show dashboard if authenticated
  if (isAuthenticated) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  // Show login or register form
  if (isLoginMode) {
    return <LoginForm onToggleMode={toggleMode} onLogin={handleLogin} />;
  } else {
    return <RegisterForm onToggleMode={toggleMode} onRegister={handleRegister} />;
  }
};

export default AuthWrapper;