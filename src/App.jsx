import "./App.css";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import {
  Homepage,
  WhatWeProduce,
  Membership,
  WhoWeAre,
  Contact,
} from "./pages/index";

import { NotFound } from "./components/index";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="/whatweproduce" element={<WhatWeProduce />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/whoweare" element={<WhoWeAre />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
