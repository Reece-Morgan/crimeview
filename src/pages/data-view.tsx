import { useEffect, useState } from "react";
import { Crime, CrimeData, PostCode } from "../types/types";
import styled from "styled-components";
import CrimeView from "../components/crime-view";

function DataViewPage() {
  const [postCode, setPostCode] = useState<PostCode>();
  const [crimeData, setCrimeData] = useState<CrimeData>();
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const postcodeParam = params.get("postcode");
    let postcode: PostCode;
    let crimes: CrimeData;
    if (postcodeParam !== null) {
      const xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        `http://api.getthedata.com/postcode/${postcodeParam.replace(/ /g, "+")}`
      );
      xhr.onload = function () {
        if (xhr.status === 200) {
          postcode = JSON.parse(xhr.responseText);
          setPostCode(JSON.parse(xhr.responseText));
          if (postcode !== undefined) {
            const xhr2 = new XMLHttpRequest();
            xhr2.open(
              "GET",
              `https://data.police.uk/api/crimes-street/all-crime?lat=${postcode.data.latitude}&lng=${postcode.data.longitude}`
            );
            xhr2.onload = function () {
              if (xhr2.status === 200) {
                crimes = JSON.parse(xhr2.responseText);
                setCrimeData(JSON.parse(xhr2.responseText));
                const catArray: string[] = [];
                for (let i = 0; i < crimes.length; i++) {
                  if (!catArray.includes(crimes[i].category)) {
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
      <Title>Data View</Title>
      <Note>
        Please note: since only the British Transport Police provide data for
        Scotland, crime levels may appear much lower than they really are.
      </Note>
      {!crimeData || crimeData.length === 0 ? (
        <NoData>No Crime Data found for this area</NoData>
      ) : (
        <>
          {categories.map((cat) => (
            <>
              <Category>{cat.replace(/-/g, " ")}</Category>
              {crimeData
                .filter((crime: Crime) => crime.category === cat)
                .map((crime: Crime, i: number) => (
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

const Title = styled.h1``;

const Note = styled.p`
  font-size: 12px;
  margin: 0;
`;

const NoData = styled.p`
  margin: 0;
`;

const Category = styled.h2`
  text-transform: capitalize;
`;
