import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home";
import DataViewPage from "./pages/data-view";
import MapViewPage from "./pages/map-view";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/data-view", element: <DataViewPage /> },
  { path: "/map-view", element: <MapViewPage /> },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
