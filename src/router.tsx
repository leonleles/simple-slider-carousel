import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ExamplePokemonPage } from "./pages/example-pokemon";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ExamplePokemonPage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};
