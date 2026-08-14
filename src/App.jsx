import React from "react";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import useTabVisibility from "./hooks/useTabVisibility";

function App() {
  useTabVisibility();

  return <RouterProvider router={AppRoutes} />;
}

export default App;
