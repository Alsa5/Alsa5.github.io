import React, { useState, useEffect } from 'react';
import '../styles/PatientPage.css';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'; // Import signOut from firebase/auth
import { auth } from '../firebase-config'; // Import your Firebase config

const PatientPage = () => {
  // State to hold prescribed medicines and appointment request form data
  const [medicines, setMedicines] = useState([]);
  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: '',
    reason: ''
  });
  const navigate= useNavigate();

  // Function to fetch prescribed medicines (mock data for now)
  const fetchMedicines = () => {
    // Simulated fetch or API call
    // Replace with actual API call to retrieve prescribed medicines
    const mockMedicines = [
      { id: 1, name: 'Medicine A' },
      { id: 2, name: 'Medicine B' }
    ];
    setMedicines(mockMedicines);
  };

  useEffect(() => {
    fetchMedicines();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Fetch medicines on component mount

  // Handler for appointment form submission
  const handleAppointmentSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., API call to submit appointment request)
    console.log('Appointment data:', appointmentData);
    // Reset appointment form after submission
    setAppointmentData({ date: '', time: '', reason: '' });
  };

  // Handler for appointment form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect to the login page after sign out
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };

  return (
    <div className="PatientPage">
      <h1>Welcome to Your Patient Page</h1>

      <h2>Prescribed Medicines</h2>
      <ul>
        {medicines.map(medicine => (
          <li key={medicine.id}>{medicine.name}</li>
        ))}
      </ul>

      <h2>Request Appointment</h2>
      <form onSubmit={handleAppointmentSubmit}>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={appointmentData.date}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={appointmentData.time}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Reason for Appointment:</label>
          <textarea
            name="reason"
            value={appointmentData.reason}
            onChange={handleInputChange}
            required
          />
        <br />
        <button type="submit">Submit Appointment Request</button>
      </form>
      <button style={{float:"right", justifyContent:"end"}} onClick={handleSignOut} className="button">Sign Out</button>
    </div>
  );
};

export default PatientPage;