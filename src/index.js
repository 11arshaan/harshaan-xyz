import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import "./assets/fonts/IBMPlexMono-Regular.ttf";
import { ArtProvider } from "./utils/ArtContext";


import App from "./App";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Art from "./routes/Art";
import Music from "./routes/Music";
import Contact from "./routes/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "art",
        element: <Art />,
      },
      {
        path: "music",
        element: <Music />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // {
      //   path: "upload",
      //   element: <Upload />
      // }],
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

        <ArtProvider>
          <RouterProvider router={router} />
        </ArtProvider>
  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
