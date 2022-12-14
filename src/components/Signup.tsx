import React from "react";
import Layout from "./Layout";

const Signup = (props:any) => {
  console.log(props)
  return (
    <div>
      <h1>SignUp</h1>
      <form>
        <div>
          <p>Username</p>
          <input type="text" />
        </div>
        <div>
          <p>Email</p>
          <input type="text" />
        </div>
        <div>
          <p>Password</p>
          <input type="password" />
        </div>
        <div>
          <p>Confirm Password</p>
          <input type="password" />
        </div>
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default Layout(Signup);
