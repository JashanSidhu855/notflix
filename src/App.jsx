import React from "react";
import LandingPage from "./pages/landing page/landing";
import ShowDetails from "./pages/show page/showdetails.jsx";
import BookingForm from "./pages/form/form";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/shows/:id" element={<ShowDetails />} />
      <Route path="/booking/:id" element={<BookingForm />} />
    </Routes>
  );
}

export default App;
