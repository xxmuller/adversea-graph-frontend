import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./SearchResults";
import Statistics from "./Statistics";
import TitleSearch from "./TitleSearch";
import AboutPage from "./AboutPage/AboutPage";
import ResultGraph from "./ResultGraph/ResultGraph";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="" element={<TitleSearch />}>
        <Route path="graph" element={<ResultGraph />}>
          <Route path="results" element={<SearchResults />} />
          <Route path="stats" element={<Statistics />} />
        </Route>
      </Route>
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
}
