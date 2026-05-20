import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Offerte } from "./pages/Offerte";
import { Privacy, Cookies, Voorwaarden } from "./pages/Legal";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="offerte" element={<Offerte />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="voorwaarden" element={<Voorwaarden />} />
      </Route>
    </Routes>
  );
}
