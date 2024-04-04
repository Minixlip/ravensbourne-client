/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useState } from 'react';
import ErrorPopUp from '../ErrorPopUp';

const RegisterDob = ({
  handleSubmitSection,
  HandleOnChange,
  day,
  month,
  year,
  handleSubmitBack,
}) => {
  const handleInputChange = (event) => {
    const { value } = event.target;

    const regex = /^[0-9]+$/;

    if (regex.test(value) || value === '') {
      HandleOnChange(event);
    }
  };

  const currentTime = new Date();

  const currentYear = currentTime.getFullYear();

  const [error, setError] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-5  flex flex-col  gap-y-4"
    >
      <span>Date of Birth</span>
      <label htmlFor="dateOfBirthDay">Day</label>
      <input
        type="text"
        minLength={2}
        maxLength={2}
        max={31}
        placeholder="Day"
        required
        id="dateOfBirthDay"
        name="dateOfBirthDay"
        className="sign-input"
        value={day} // Ensure input fields are controlled components
        onChange={handleInputChange}
      />
      <label htmlFor="month">Month</label>
      <input
        type="text"
        minLength={2}
        maxLength={2}
        max={12}
        placeholder="Month"
        required
        id="month"
        name="dateOfBirthMonth"
        className="sign-input"
        value={month} // Ensure input fields are controlled components
        onChange={handleInputChange}
      />
      <label htmlFor="year">Year</label>
      <input
        type="text"
        maxLength={4}
        placeholder="Year"
        required
        id="year"
        name="dateOfBirthYear"
        className="sign-input"
        value={year} // Ensure input fields are controlled components
        onChange={handleInputChange}
      />
      <div className="flex gap-2">
        <button
          className="btn3 w-fit mt-7 hover:gap-4 transition-all ease-in-out duration-200"
          onClick={() => {
            handleSubmitBack();
          }}
        >
          <FaChevronLeft
            size={'11px'}
            color="#70757E"
          />
          Back
        </button>
        <button
          className="btn1 w-fit mt-7 hover:gap-4 transition-all ease-in-out duration-200"
          onClick={() => {
            day <= 31 &&
            month <= 12 &&
            year <= currentYear &&
            year >= 1900 &&
            day > 0 &&
            month > 0
              ? handleSubmitSection()
              : setError(
                  <p>
                    Please enter a valid date:
                    <br />
                    <br />
                    Example
                    <br />
                    (Day 01: Month 01: Year 2000)
                    <br />
                    minimum year 1900
                  </p>
                );
          }}
        >
          Continue
          <FaChevronRight
            size={'11px'}
            color="#70757E"
          />
        </button>
      </div>
      {error && (
        <ErrorPopUp
          error={error}
          setError={setError}
        />
      )}
    </motion.div>
  );
};

export default RegisterDob;
