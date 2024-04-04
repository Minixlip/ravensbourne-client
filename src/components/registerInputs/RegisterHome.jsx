/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useState } from 'react';
import ErrorPopUp from '../ErrorPopUp';

const RegisterName = ({
  handleSubmitSection,
  HandleOnChange,
  postCode,
  streetName,
  city,
  handleSubmitBack,
}) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const regex = /^[A-Za-z0-9]+$/;

    const regexCity = /^[A-Za-z]+$/;

    if (name === 'address.city') {
      if (regexCity.test(value) || value === '') {
        HandleOnChange(event);
      }
      return;
    }

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
      <label htmlFor="postCode">Post Code</label>
      <input
        type="text"
        minLength={5}
        maxLength={7}
        placeholder="Post Code"
        required
        id="postCode"
        name="address.postCode"
        className="sign-input"
        value={postCode} // Ensure input fields are controlled components
        onChange={handleInputChange}
      />
      <label htmlFor="streetName">Street Name</label>
      <input
        type="text"
        minLength={5}
        maxLength={40}
        placeholder="Street Name"
        required
        id="streetName"
        name="address.streetName"
        className="sign-input"
        value={streetName} // Ensure input fields are controlled components
        onChange={HandleOnChange}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        minLength={3}
        maxLength={58}
        placeholder="City"
        required
        id="city"
        name="address.city"
        className="sign-input"
        value={city} // Ensure input fields are controlled components
        onChange={handleInputChange}
      />
      <div className="inline-flex gap-4">
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
            postCode.length >= 6 && streetName.length >= 5 && city.length >= 3
              ? handleSubmitSection()
              : setError(
                  <p>
                    Please enter a valid post code, street name, city: <br />
                    <br />
                    - Post code (minimum 6 characters) <br />
                    - Street (minimum 5 characters) <br />- City (minimum 3
                    characters)
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

export default RegisterName;
