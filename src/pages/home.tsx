import SearchBar from "../components/search-bar";
import styled from "styled-components";
import Header from "../components/header";

function HomePage() {
  return (
    <Wrapper>
      <Header />
      <SearchBar />
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
