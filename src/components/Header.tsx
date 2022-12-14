import React from "react";
// type IProps ={
//     login:boolean,
//     setLogin:Function
//   }
function Header(props: any) {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">Logo</div>
      <div className="navbar__item">About Us</div>
      <div className="navbar__item">Contact</div>
      <div
        className="navbar__item"
        onClick={() => props.setLogin(!props.login)}
      >
        {props.login ? "SignUp" : "Login"}
      </div>
    </header>
  );
}

export default Header;
