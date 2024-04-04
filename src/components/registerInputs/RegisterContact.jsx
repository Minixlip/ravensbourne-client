/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import validator from 'validator';
import { useState } from 'react';
import ErrorPopUp from '../ErrorPopUp';

const RegisterContact = ({
  handleSubmitSection,
  HandleOnChange,
  phoneNumber,
  emailAddress,
  handleSubmitBack,
}) => {
  const handleInputChange = (event) => {
    const { value } = event.target;

    const regex = /^[0-9]+$/;

    if (regex.test(value) || value === '') {
      HandleOnChange(event);
    }
  };

  const [error, setError] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-5  flex flex-col  gap-y-4"
    >
      <div className="inline-flex flex-col gap-y-4 ">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          minLength={11}
          maxLength={11}
          placeholder="Phone Number"
          required
          id="phoneNumber"
          name="phoneNumber"
          className="sign-input"
          value={phoneNumber} // Ensure input fields are controlled components
          onChange={handleInputChange}
        />
        <label htmlFor="emailAddress">Email Address</label>
        <input
          type="email"
          maxLength={30}
          placeholder="Email Address"
          required
          id="emailAddress"
          name="emailAddress"
          className="sign-input"
          value={emailAddress} // Ensure input fields are controlled components
          onChange={HandleOnChange}
        />
      </div>
      <div className="inline-flex gap-2">
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
            phoneNumber.length >= 11 &&
            emailAddress.includes('@') &&
            validator.isEmail(emailAddress)
              ? handleSubmitSection()
              : setError(
                  'Please enter a phone number (11 digits) & valid email.'
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

export default RegisterContact;
