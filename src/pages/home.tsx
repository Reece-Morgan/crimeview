import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>CrimeView</h1>
      <Link to="/data-view">Data View</Link>
      <Link to="/map-view">Map View</Link>
    </>
  );
}

export default HomePage;
