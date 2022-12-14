import React, {  ComponentType } from "react";
import Footer from "./Footer";
import Header from "./Header";
// type IProps = {
//   login: boolean;
//   setLogin: Function;
// };

export interface HocProp{
  extra: string
}

function Layout<T>(OriginalComp: ComponentType<T>) {
  return function WrappedComps(props: T & {}) {
    return (
      <div>
        <Header {...props}/>
        <OriginalComp {...props}  />
        <Footer />
      </div>
    );
  };
}

export default Layout;
