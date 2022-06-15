import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "./routes";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage";
import ExamPage from "./pages/ExamPage";
import LearnPage from "./pages/LearnPage";
import EditPage from "./pages/EditPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={routes.HOME} element={<HomePage />} />
        <Route path={routes.EXAM} element={<ExamPage />} />
        <Route path={routes.LEARN} element={<LearnPage />} />
        <Route path={routes.EDIT} element={<EditPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
