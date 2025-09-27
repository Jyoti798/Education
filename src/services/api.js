// src/services/api.js

export async function fetchSeatInfo() {
  try {
    const res = await fetch("https://viaje.ai/seatinfo_api/");
    const json = await res.json();

    if (Array.isArray(json)) return json;
    if (json && Array.isArray(json.data)) return json.data;
    return [];
  } catch (err) {
    console.error("Error fetching seat info", err);
    return [];
  }
}

export async function fetchTestimonials() {
  try {
    const res = await fetch("https://viaje.ai/testimonial_api/");
    const json = await res.json();

    if (Array.isArray(json)) return json;
    if (json && Array.isArray(json.data)) return json.data;
    return [];
  } catch (err) {
    console.error("Error fetching testimonials", err);
    return [];
  }
}
