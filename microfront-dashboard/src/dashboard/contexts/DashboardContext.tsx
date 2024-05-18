import { createContext } from "react";
import SideBarItemModel from "../models/sidebarItem";

interface DashboardContextProps {
  sidebarIndex: number;
  setSidebarIndex: (index: number) => void;
  sideBarItems: SideBarItemModel[];
}

const DashboardContext = createContext<DashboardContextProps>({
  sidebarIndex: 0,
  setSidebarIndex: (_index: number) => {},
  sideBarItems: [],
});

export default DashboardContext;
