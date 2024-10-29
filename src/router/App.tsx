import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePageAsync = lazy(() => import("../pages/HomePage"));
const AboutPageAsync = lazy(() => import("../pages/AboutPage"));

export const App = () => (
  <BrowserRouter basename="/">
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<HomePageAsync />} />
        <Route path="/about" element={<AboutPageAsync />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
