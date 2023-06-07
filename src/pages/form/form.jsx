import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Head2 from '../../components/h2/h2';
import Input from '../../components/input/input';
import "./form.css";
import Button from '../../components/button/button';
import Header from '../../components/header/header';

const BookingForm = () => {
  const [showName, setShowName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const showNameFromURL = searchParams.get('showName');

  useEffect(() => {
    if (showNameFromURL) {
      setShowName(showNameFromURL);
    }
  }, [showNameFromURL]);

  const handleFormSubmit = (event) => {
  event.preventDefault();
    // Store form data in local storage
    localStorage.setItem('showName', showName);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);

    // Set success message
    setSuccessMessage('Form submitted successfully!');
};


  return (
    <div className="screen">
      <Header />
      <Head2 h2="Booking Form" />
      <form onSubmit={handleFormSubmit} className="form">
        <Input
          placeholder="Show Name"
          type="text"
          value={showName}
          onChange={(event) => setShowName(event.target.value)}
        />
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button text="Submit" type="submit" />
      </form>

      {successMessage && <p className = "successMessage">{successMessage}</p>}
    </div>
  );
};

export default BookingForm;
