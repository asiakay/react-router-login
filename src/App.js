import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/reset">Reset</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<PasswordReset />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Login</h2>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to main page{" "}
      </button>
    </>
  );
}
function Home() {
  return (
    <>
      <h2>Home</h2>
    </>
  );
}

function PasswordReset() {
  return (
    <>
      <h2>Password Reset</h2>
    </>
  );
}

function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
    </>
  );
}
