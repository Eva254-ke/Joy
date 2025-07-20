import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingForm.css";

const services = [
  { id: 1, title: "Full Body Wax", price: 15000 },
  { id: 2, title: "Hair Dye", price: 3500 },
  { id: 3, title: "Bikini Wax", price: 5000 },
  { id: 4, title: "Brazilian Wax", price: 8500 },
  { id: 5, title: "Armpit Wax", price: 3500 },
  { id: 6, title: "Full Body Massage (Swedish) 1hr", price: 10000 },
  { id: 7, title: "Deep Tissue Massage", price: 13500 },
  { id: 8, title: "Aromatherapy Massage", price: 12000 },
  { id: 9, title: "Eye Lash", price: 3500 },
  { id: 10, title: "Full Leg Wax", price: 4000 },
  { id: 11, title: "Hair Braiding", price: 4000 },
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
];

export default function BookingForm() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!selectedService || !selectedDate || !selectedTime || !name || !phone) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^07\d{8}$/.test(phone)) {
      setError("Please enter a valid Kenyan phone number starting with 07.");
      return;
    }

    setSuccess(
      "Your booking is confirmed! Please pay at the salon front desk. We look forward to seeing you."
    );
  };

  return (
    <section className="booking-section">
      <h2 className="booking-title">Book Your Appointment</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Service
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title} - KES {s.price}
              </option>
            ))}
          </select>
        </label>

        <label>
          Date
          <DatePicker
            selected={selectedDate}
            onChange={setSelectedDate}
            minDate={new Date()}
            dateFormat="MMMM d, yyyy"
            placeholderText="Choose a date"
            required
            className="date-picker-input"
            calendarStartDay={1}
          />
        </label>

        <label>
          Time
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          >
            <option value="">Select a time slot</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </label>

        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            required
          />
        </label>

        <label>
          Phone
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="07XXXXXXXX"
            pattern="07\d{8}"
            required
          />
        </label>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <button type="submit" className="book-btn">
          Book Appointment
        </button>
      </form>
    </section>
  );
}
