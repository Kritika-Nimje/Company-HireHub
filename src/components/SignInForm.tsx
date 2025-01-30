import React, { useState } from "react";
import { signInWithEmail, resendVerificationEmail } from "../config/auth";
import { toast } from "react-toastify";

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signInWithEmail(email, password);

    if (error) {
      if (error.message === "Please verify your email before logging in.") {
        toast.warn("Check your email and verify your account before logging in.");
      } else {
        toast.error(error.message, { position: "top-center" });
      }
    } else {
      toast.success("Sign-in successful!", { position: "top-center" });
    }

    setLoading(false);
  };

  const handleResendVerification = async () => {
    const { error } = await resendVerificationEmail(email);
    if (error) {
      toast.error("Error sending verification email.");
    } else {
      toast.success("Verification email resent. Check your inbox!");
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Signing In..." : "Sign In"}
      </button>

      <button type="button" onClick={handleResendVerification} disabled={!email}>
        Resend Verification Email
      </button>
    </form>
  );
};

export default SignInForm;
