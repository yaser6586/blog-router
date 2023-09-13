import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { userLoader } from "./routerPages/Home.jsx";
import News from "./routerPages/News.jsx";
import Blog from "./routerPages/Blog.jsx";
import ContactUs from "./routerPages/ContactUs.jsx";
import ErrorPage from "./routerPages/ErrorPage.jsx";
import PostDetail, { detailLoader } from "./routerPages/postDetail.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
        loader: userLoader,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "/:id",
        element: <PostDetail />,
        loader: detailLoader,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
