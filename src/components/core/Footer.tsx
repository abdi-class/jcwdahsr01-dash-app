import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="bg-gray-600 text-white p-4 text-center">
      <p>2025 DashAPP. All rights reserved</p>
    </footer>
  );
};

export default Footer;
