import styled from "styled-components";
import { useAppSelector } from "../store";
import CustomLink from "./Link";

function SearchHistory() {
  const { history } = useAppSelector((state) => state.SearchHistory);
  return (
    <>
      <h3>Search History</h3>
      {!history || history.length === 0 ? (
        <p>You have no recent searches</p>
      ) : (
        <List>
          {history.map((postcode: string, i: number) => (
            <ListItem>
              <CustomLink
                href={`/data-view?postcode=${postcode.replace(/ /g, "+")}`}
              >
                {postcode}
              </CustomLink>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

export default SearchHistory;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const ListItem = styled.li`
  list-style-type: none;
`;
