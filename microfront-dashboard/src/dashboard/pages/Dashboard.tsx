import React from "react";
import SideBar from "../components/Sidebar";
import styled from "styled-components";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <Content>
        <Header>
          <h1>Dashboard</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            consectetur odio. Nulla facilisi. Pellentesque habitant morbi
            tristique senect
          </p>
        </Header>
        <CardContainer>
          {[
            {
              title: generateRandomTitle(),
              description: generateRandomDescription(),
              imageUrl: "https://picsum.photos/200/300",
            },
            {
              title: generateRandomTitle(),
              description: generateRandomDescription(),
              imageUrl: "https://picsum.photos/200/301",
            },
            {
              title: generateRandomTitle(),
              description: generateRandomDescription(),
              imageUrl: "https://picsum.photos/200/302",
            },
            {
              title: generateRandomTitle(),
              description: generateRandomDescription(),
              imageUrl: "https://picsum.photos/200/303",
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
      </Content>
    </Container>
  );
};

// Generate random description for the cards
const generateRandomDescription = () => {
  const descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    "Fusce ullamcorper fringilla ipsum, eget dictum.",
    "Pellentesque habitant morbi tristique senectus.",
    "Sed ultrices magna vel velit varius, eu luctus risus.",
    "Integer quis mi sed neque eleifend sagittis.",
    "In convallis sapien eget libero pharetra, ut vehicula.",
  ];
  const randomIndex = Math.floor(Math.random() * descriptions.length);
  return descriptions[randomIndex];
};

// Generate random description for the cards
const generateRandomTitle = () => {
  const title = [
    "sapien eget",
    "libero pha",
    "Pellen tris",
    "senectus ma",
    "Integer sa",
    "neque elei",
    "risus. In c",
    "dictum",
    "vel velit",
    "luctus ris",
    "consectetur",
    "adipiscing",
  ];
  const randomIndex = Math.floor(Math.random() * title.length);
  return title[randomIndex];
};

const Container = styled.div`
  display: flex;
  padding-top: 10px;
  padding-left: 25px;
  margin-left: 250px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
`;

const Header = styled.div`
  padding-bottom: 40px;
  h1 {
    font-size: 1.8em;
    font-weight: bold;
    color: #4c51bf;
    margin-bottom: 0;
  }
  p {
    padding-top: 10px;
    font-size: 1em;
    color: #4c51bf;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <CardWrapper>
      <img src={imageUrl} alt={title} />
      <CardContent>
        <h2>{title}</h2>
        <p>{description}</p>
      </CardContent>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  max-width: 200px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: 240px;
  }
`;

const CardContent = styled.div`
  padding: 16px;
  h2 {
    font-weight: bold;
    text-align: center;
    font-size: 1.2em;
    margin-bottom: 8px;
  }
  p {
    font-size: 1em;
    color: #666;
  }
`;

export default Dashboard;
