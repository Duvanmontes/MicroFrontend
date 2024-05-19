import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SidebarContainer = styled.div`
  user-select: none;
  width: 250px;
  height: 100%;
  background-image: linear-gradient(to bottom right, #6b46c1, #4299e1);
  color: white;
  position: fixed;
  top: 59px; /* Ajusta esto para alinearlo con el navbar old:64px */
  left: 0;
  overflow-y: auto;
  // media para que se oculte cuando la pantalla sea pequeña
  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 1.5em;
  font-weight: bold;
  background-color: #4c51bf;

  img {
    margin-right: 10px;
  }
`;

const SidebarContent = styled.div`
  padding: 20px;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  cursor: pointer;

  .sidebar-item-image {
    display: none;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    .sidebar-item-image {
      display: block;
    }
  }
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <img
          src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
          height="35"
          width="35"
          alt="React Logo"
        />
        Sidebar
      </SidebarHeader>
      <SidebarContent>
        {["Item 1", "Item 2", "Item 3", "Item 4"].map((e, i) => (
          <SidebarItem key={i}>
            <span>{e}</span>
            <div className="sidebar-item-image">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </SidebarItem>
        ))}
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
