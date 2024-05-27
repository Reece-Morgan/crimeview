import { Link } from "react-router-dom";
import styled from "styled-components";

function MapViewPage() {
  return (
    <Wrapper>
      <Title>Map View</Title>
      <Text>Map View is coming soon!</Text>
      <Text>
        Return to <Link to="/">Home Page</Link>
      </Text>
    </Wrapper>
  );
}

export default MapViewPage;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Title = styled.h1``;

const Text = styled.p``;
