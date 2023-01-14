import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Layout from "./components/Layout";

import List from "./components/Layout";
import Details from "./pages/Techs/Details";

import "./App.css";

const theme = {
  gray: "#64748b",
  purple: "#795FCD",
  white: "#FFFFFF",
  border: "#F0F0F0",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<List />} />
            <Route path="technology/:id" element={<Details />} />
            <Route path="*" element={<List />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
export default App;
