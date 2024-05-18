import { ReactNode, useState } from "react";
import DashboardContext from "../contexts/DashboardContext";
import { sideBarItems } from "../models/sidebarItem";

const DashboardProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [sidebarIndex, setSidebarIndex] = useState(0);

  const handleSidebarIndex = (index: number) => {
    setSidebarIndex(index);
  };
  return (
    <DashboardContext.Provider
      value={{
        sidebarIndex: sidebarIndex,
        setSidebarIndex: handleSidebarIndex,
        sideBarItems: sideBarItems,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
