import { supabase } from "./supabase";

// Sign up with email (Sends verification email)
export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) throw error;

    console.log("Sign-up successful:", data);
    return { data, error: null };
  } catch (error: any) {
    console.error("Error signing up:", error.message);
    return { data: null, error };
  }
};

// Sign in with email (Checks if email is verified)
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) throw error;

    // Check if email is verified
    if (!data.user?.email_confirmed_at) {
      return { data: null, error: { message: "Please verify your email before logging in." } };
    }

    console.log("Sign-in successful:", data);
    return { data, error: null };
  } catch (error: any) {
    console.error("Error signing in:", error.message);
    return { data: null, error };
  }
};

// Sign out
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;

    console.log("Sign-out successful");
    return { error: null };
  } catch (error: any) {
    console.error("Error signing out:", error.message);
    return { error };
  }
};

// Resend email verification link
export const resendVerificationEmail = async (email: string) => {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://your-app.com/verify-email",
    });

    if (error) throw error;

    console.log("Verification email sent");
    return { message: "Verification email sent successfully." };
  } catch (error: any) {
    console.error("Error resending verification email:", error.message);
    return { error };
  }
};
