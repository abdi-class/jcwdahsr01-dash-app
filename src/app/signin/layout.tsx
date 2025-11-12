import type { Metadata } from "next";
import * as React from "react";

interface ISignUpLayoutProps {
  children: React.ReactNode; // merepresentasikan bahwa props children membawa data dalam bentuk component react
}

export const metadata: Metadata = {
  title: "Dash-App | Sign Up",
  description: "Dash-App",
};

const SignUpLayout: React.FunctionComponent<ISignUpLayoutProps> = (props) => {
  return (
    <div className="min-h-screen py-32">
      <main>{props.children}</main>
    </div>
  );
};

export default SignUpLayout;
