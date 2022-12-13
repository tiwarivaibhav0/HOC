import React from "react";
import Footer from "./Footer";
import Header from "./Header";
type IProps ={
  login:boolean,
  setLogin:Function 
}

function Layout(OriginalComp:React.ElementType){
  return function WrappedComps(props:IProps) {
    return (
      <div>
        <Header {...props}/>
        <OriginalComp/>
        <Footer />
      </div>
    );
  };
};


export default Layout;
