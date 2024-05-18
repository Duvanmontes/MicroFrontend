import { useContext } from "react";
import SideBar from "../components/Sidebar";
import DashboardContext from "../contexts/DashboardContext";
import DashboardProvider from "../providers/DashboardProvider";
import styled from "styled-components";

const Dashboard: React.FC = () => {
  return (
    <DashboardProvider>
      <Container>
        <SideBar />
        <Content />
      </Container>
    </DashboardProvider>
  );
};

const Container = styled.div`
  padding-left: 250px;
  height: calc(100vh - 80px);
  flex: display;
  flex-direction: row;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Content: React.FC = () => {
  return (
    <div>
      <h1
        style={{
          padding: "20px",
          fontSize: "1.8em",
          fontWeight: "bold",
          color: "#4c51bf",
        }}
      >
        Dashboard
      </h1>
      <span
        style={{
          padding: "20px",
          fontSize: "1em",
          color: "#4c51bf",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
        consectetur odio. Nulla facilisi. Pellentesque habitant morbi tristique
        senect
      </span>
      <CardContainer>
        {[
          {
            title: "Card 1",
            description: "Description 1",
            imageUrl: "https://picsum.photos/200/300",
          },
          {
            title: "Card 2",
            description: "Description 2",
            imageUrl: "https://picsum.photos/200/300",
          },
          {
            title: "Card 3",
            description: "Description 3",
            imageUrl: "https://picsum.photos/200/300",
          },
        ].map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </CardContainer>
    </div>
  );
};

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "0 20px 20px 20px",
        }}
      >
        <div
          className="text-4xl"
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
            color: "#4c51bf",
          }}
        >
          {title}
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Dashboard;
