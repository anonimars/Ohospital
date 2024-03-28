import CoverPage from './pages/cover'
import React from "react";
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:  <CoverPage />,
    
  },
  
]);
function App() {
  return (
    <div className="App">
     
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
