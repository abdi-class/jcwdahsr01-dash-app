import * as React from "react";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FunctionComponent<IDashboardLayoutProps> = (
  props
) => {
  return (
    <div className="flex h-screen">
      <div className="w-44 h-full bg-blue-300">
        <h2>Sidebar</h2>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default DashboardLayout;
