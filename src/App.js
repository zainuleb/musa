import LandingPage from "./page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./page/ContactUs";
import Events from "./page/Events";
import FAQs from "./page/FAQs";
import Membership from "./page/Membership";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
