import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import TutorPage from "pages/TutorPage";
import TutorDetailPage from "pages/TutorDetailPage";
import Header from "components/Header";
import Footer from "components/Footer";

const Router = ({}) => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tutor" element={<TutorPage />} />
        <Route path="/tutor-details" element={<TutorDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
