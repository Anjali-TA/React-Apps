import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import RootLayout from "./Pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
