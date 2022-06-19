import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { routes } from "./routes";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import QuestionContextProvider from "./contexts/QuestionsContext/QuestionContextProvider";

import PageLayout from "./layouts/PageLayout/PageLayout";

import HomePage from "./pages/HomePage";
import ExamPage from "./pages/ExamPage";
import LearnPage from "./pages/LearnPage";
import EditPage from "./pages/EditPage";
import EditQuestionPage from "./pages/edit/EditQuestionPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <QuestionContextProvider>
        <PageLayout>
          <Routes>
            <Route path={routes.HOME} element={<HomePage />} />
            <Route path={routes.EXAM} element={<ExamPage />} />
            <Route path={routes.LEARN} element={<LearnPage />} />
            <Route path={routes.EDIT} element={<EditPage />} />
            <Route path={routes.EDIT_QUESTION} element={<EditQuestionPage />} />
            <Route
              path="*"
              element={<Navigate to={routes.HOME} replace={true} />}
            />
          </Routes>
        </PageLayout>
      </QuestionContextProvider>
      <Footer />
    </BrowserRouter>
  );
}
