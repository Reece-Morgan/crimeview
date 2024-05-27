import { Link } from "react-router-dom";
import SearchBar from "../components/search-bar";
import styled from "styled-components";

function HomePage() {
  return (
    <Wrapper>
      <Header>
        <Title>CrimeView</Title>
        <List>
          <ListItem>
            <Link to="/data-view">Data View</Link>
          </ListItem>
          <ListItem>
            <Link to="/map-view">Map View</Link>
          </ListItem>
        </List>
      </Header>

      <SearchBar />
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1``;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const ListItem = styled.li`
  list-style-type: none;
`;
