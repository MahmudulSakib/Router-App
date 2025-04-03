import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact, { contactAction } from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";

import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          {
            path: "contact",
            element: <Contact />,
            action: contactAction,
          },
          {
            path: "faq",
            element: <Faq />,
          },
        ],
      },
      {
        path: "careers",
        element: <CareersLayout />,
        errorElement: <CareersError />,
        children: [
          {
            path: "",
            element: <Careers />,
            loader: careersLoader,
          },
          {
            path: ":id",
            element: <CareerDetails />,
            loader: careerDetailsLoader,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
