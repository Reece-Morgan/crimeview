import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home";
import DataViewPage from "./pages/data-view";
import MapViewPage from "./pages/map-view";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/data-view", element: <DataViewPage /> },
  { path: "/map-view", element: <MapViewPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
