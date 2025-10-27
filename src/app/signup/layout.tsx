import * as React from "react";

interface ISignUpLayoutProps {
  children: React.ReactNode; // merepresentasikan bahwa props children membawa data dalam bentuk component react
}

const SignUpLayout: React.FunctionComponent<ISignUpLayoutProps> = (props) => {
  return (
    <div className="min-h-screen py-32">
      <main>{props.children}</main>
    </div>
  );
};

export default SignUpLayout;
