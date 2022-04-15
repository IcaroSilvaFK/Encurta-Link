import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "../Pages/Home";

export function RoutesApplication() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
