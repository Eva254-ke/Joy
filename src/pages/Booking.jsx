import React from "react";
import BookingForm from "../components/BookingForm";

export default function Booking() {
  return (
    <div className="booking-page">
      <h1>Book Your Appointment</h1>
      <p>Fill out the form below to schedule your visit.</p>
      <BookingForm />
    </div>
  );
}
