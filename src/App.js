import LandingPage from "./page/LandingPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactUs from "./page/ContactUs";
import Header from "./component/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
