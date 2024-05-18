import { useContext } from "react";
import DashboardContext from "../contexts/DashboardContext";

interface UseDashboardHookProps {
  changeTab: (tab: number) => void;
}

const useDashboard: () => UseDashboardHookProps = () => {
  const { setSidebarIndex } = useContext(DashboardContext);

  const handleChangeSidebarTab = (tab: number) => {
    setSidebarIndex(tab);
  };

  return {
    changeTab: handleChangeSidebarTab,
  };
};

export default useDashboard;
