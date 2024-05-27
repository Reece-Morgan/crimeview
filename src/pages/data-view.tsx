import { useEffect, useState } from "react";
import { Crime, CrimeData, PostCode } from "../types/types";
import styled from "styled-components";
import CrimeView from "../components/crime-view";
import Header from "../components/header";
import CustomLink from "../components/Link";

function DataViewPage() {
  const [postCode, setPostCode] = useState<PostCode>();
  const [crimeData, setCrimeData] = useState<CrimeData>();
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // get the postcode param from the url
    const params = new URLSearchParams(window.location.search);
    const postcodeParam = params.get("postcode");
    // initalize local postcode and crimes variables
    let postcode: PostCode;
    let crimes: CrimeData;
    if (postcodeParam !== null) {
      // if the postcode exists as a parameter, then make the first GET request
      const xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        `http://api.getthedata.com/postcode/${postcodeParam.replace(/ /g, "+")}`
      );
      xhr.onload = function () {
        if (xhr.status === 200) {
          // if the GET request is successful, store the response locally and in state;
          postcode = JSON.parse(xhr.responseText);
          setPostCode(postcode);
          if (postcode !== undefined) {
            // if the postcode response is successful, then perform a second GET request for the crime data
            const xhr2 = new XMLHttpRequest();
            xhr2.open(
              "GET",
              `https://data.police.uk/api/crimes-street/all-crime?lat=${postcode.data.latitude}&lng=${postcode.data.longitude}`
            );
            xhr2.onload = function () {
              if (xhr2.status === 200) {
                // if the GET request is successful, store the response locally and in state;
                crimes = JSON.parse(xhr2.responseText);
                setCrimeData(crimes);
                // initalize empty array for the categories
                const catArray: string[] = [];
                // for each category, check if it already exists in the array
                for (let i = 0; i < crimes.length; i++) {
                  if (!catArray.includes(crimes[i].category)) {
                    // if not, push the category to the array
                    catArray.push(crimes[i].category);
                  }
                }
                setCategories(catArray);
              }
            };
            xhr2.send();
          }
        }
      };
      xhr.send();
    }
  }, []);

  return (
    <Wrapper>
      <Header />
      <Note>
        Please note: since only the British Transport Police provide data for
        Scotland, crime levels may appear much lower than they really are.
      </Note>
      {/* display message if no data is found */}
      {!crimeData || crimeData.length === 0 ? (
        <>
          <NoData>No Crime Data found for this area. Try another search <CustomLink href='/'>here</CustomLink>.</NoData>
        </>
      ) : (
        <>
          {/* Map over the categories array */}
          {categories.map((cat) => (
            <>
              {/* For each cateogry, display the title and map over the crimeData */}
              <Category>{cat.replace(/-/g, " ")}</Category>
              {crimeData
                .filter((crime: Crime) => crime.category === cat)
                .map((crime: Crime, i: number) => (
                  // only map over the crimeData once it has been filtered to only the current category
                  <CrimeView
                    key={i}
                    postCode={postCode?.data.postcode || ""}
                    crime={crime}
                  />
                ))}
            </>
          ))}
        </>
      )}
    </Wrapper>
  );
}

export default DataViewPage;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Note = styled.p`
  font-size: 12px;
  margin: 0;
`;

const NoData = styled.p`
  margin: 10px 0;
`;

const Category = styled.h2`
  text-transform: capitalize;
`;
