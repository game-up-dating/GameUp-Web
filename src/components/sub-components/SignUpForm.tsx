import React, { useState } from "react";

const SignupForm: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = "";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = "@gmail.com";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setMessage("You have successfully signed up!");
      setIsError(false);
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
      setIsError(true);
    }
  };

  return (
    <div
      id="signupform_container"
      className="row input-row mb-5 justify-content-center"
    >
      <form
        id="signupForm"
        onSubmit={handleSubmit}
        className="signup-form d-flex align-items-center"
      >
        <div className="gradient-border-mask mr-2">
          <input
            type="email"
            id="navbar-email"
            name="email"
            className="gradient-input"
            placeholder="@gmail.com"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div id="signupForm_subcontainer">
          <button type="submit" className="btn btn-sign-in">
            Get Early Access
          </button>
        </div>
      </form>
      {message && (
        <div className={isError ? "error-message" : "success-message"}>
          {message}
        </div>
      )}
    </div>
  );
};

export default SignupForm;
