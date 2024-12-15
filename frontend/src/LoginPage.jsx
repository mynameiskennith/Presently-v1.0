import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        {/* Form fields for login */}
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
