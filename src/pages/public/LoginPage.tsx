import LoginForm from "../../components/auth/LoginForm";
import "../../styles/login.css";

export default function LoginPage() {
  return (
    <main className="login-page">
      <h1 className="login-heading">Login Or Signup</h1>
      <LoginForm />
    </main>
  );
}
