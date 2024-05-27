import styled from "styled-components";
import CustomLink from "./Link";

function Header() {
  return (
    <Wrapper>
      <Title>
        <CustomLink href="/">CrimeView</CustomLink>
      </Title>
      <List>
        <ListItem>
          <CustomLink href="/data-view">Data View</CustomLink>
        </ListItem>
        <ListItem>
          <CustomLink href="/map-view">Map View</CustomLink>
        </ListItem>
      </List>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
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
