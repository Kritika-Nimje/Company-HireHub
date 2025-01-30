import { Routes, Route, Link } from 'react-router-dom';
// Importing necessary components from 'react-router-dom' for routing.
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'; // Importing the CSS file for styling.
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
// Importing the LoginForm component.

function Home() { 
  return <h1>Welcome to HireHub</h1>;
  // Simple Home component.
  // What is component? A component is a reusable piece of code that can be used to build elements sharing the same functionality.
}

function Profile() {
  return <h1>Profile Page</h1>;
  // Simple Profile component.
}
// yaha par link karenge 
function App() {
  return (
    <div>
      
      {/* Navigation bar styled using Flexbox */}
      <nav className="navbar">
        <ul className="nav-links">
          {/* Link to the homepage */}
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* Link to the profile page */}
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        </ul>
      </nav>

      {/*yaha par path ayege  */}

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
// Exporting the App component as the default export.
