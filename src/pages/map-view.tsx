import styled from "styled-components";
import Header from "../components/header";
import CustomLink from "../components/Link";

function MapViewPage() {
  return (
    <Wrapper>
      <Header />
      <Text>Map View is coming soon!</Text>
      <Text>
        Return to <CustomLink href="/">Home Page</CustomLink>
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
