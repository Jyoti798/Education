

import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchSeatInfo, fetchTestimonials } from "../services/api";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [seats, setSeats] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const [seatsData, testimonialData] = await Promise.all([
        fetchSeatInfo(),
        fetchTestimonials(),
      ]);
      setSeats(seatsData);
      setTestimonials(testimonialData);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <DataContext.Provider value={{ seats, testimonials, loading }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
