import React from "react";
import Layout from "./Layout";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <p>Username</p>
          <input type="text" />
        </div>
        <div>
          <p>Password</p>
          <input type="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Layout(Login);
