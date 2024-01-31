import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import InfiniteScroll from "./features/InfiniteScroll/InfiniteScroll.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DroneSimulator from "./features/DroneSimulator/DroneSimulator.js";
import AnalogClock from "./features/AnalogClock/AnalogClock.js";
import TypeHead from "./features/TypeHead/TypeHead.js";
import Stepper from "./features/Stepper/Stepper.js";
import {
  Example1,
  Example2,
  Example3,
  Example4,
  Example5,
} from "./features/ExampleComponents/index.js";
import { TicTacToe } from "./features/TicTacToe/TicTacToe.js";
import { ImageCarousel } from "./features/ImageCarousel/ImageCarousel.js";
import Landing from "./features/Landing/Landing.js";
import MultiTimers from "./features/MultiTimers/MultiTimers.js";
import FolderStructureCall from "./features/FolderStructure/index.js";

const appRouter = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <></> },
  { path: "/infinite-scroll", element: <InfiniteScroll /> },
  { path: "/drone-simulator", element: <DroneSimulator /> },
  { path: "/analog-clock", element: <AnalogClock /> },
  { path: "/type-head", element: <TypeHead /> },
  {
    path: "/stepper",
    element: (
      <>
        <Stepper>
          <Example1 />
          <Example2 />
          <Example3 />
          <Example4 />
          <Example5 />
        </Stepper>
      </>
    ),
  },
  { path: "/tic-tac-toe", element: <TicTacToe /> },
  { path: "/image-carousel", element: <ImageCarousel /> },
  { path: "/landing", element: <Landing /> },
  { path: "/multi-timer", element: <MultiTimers /> },
  { path: "/folder-structure", element: <FolderStructureCall /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
