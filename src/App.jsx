// src/App.jsx
import React from "react";
import { DataProvider } from "./context/DataContext.jsx";

import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Courses from "./components/Courses/Courses.jsx";
import HowItWorks from "./components/HowItWork/HowItWorks.jsx";
import SeatsTable from "./components/SeatsTable/SeatsTable.jsx";
import Testimonials from "./components/Testimonial/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <DataProvider>
      <Header />
      <Hero />
      <Courses />
      <HowItWorks />
      <SeatsTable />
      <Testimonials />
      <Footer />
    </DataProvider>
  );
}
