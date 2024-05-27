import SearchBar from "../components/search-bar";
import styled from "styled-components";
import Header from "../components/header";
import SearchHistory from "../components/search-history";

function HomePage() {
  return (
    <Wrapper>
      <Header />
      <SearchBar />
      <SearchHistory />
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
