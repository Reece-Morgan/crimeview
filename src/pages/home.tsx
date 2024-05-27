import { Link } from "react-router-dom";
import SearchBar from "../components/search-bar";

function HomePage() {
  return (
    <>
      <h1>CrimeView</h1>
      <Link to="/data-view">Data View</Link>
      <Link to="/map-view">Map View</Link>
      <SearchBar />
    </>
  );
}

export default HomePage;
