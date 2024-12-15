import React from 'react';

const SignUpPage = () => {
  return (
    <div>
      <h2>Sign Up Page</h2>
      <form>
        {/* Form fields for signup */}
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
