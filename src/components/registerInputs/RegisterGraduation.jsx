/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useState } from 'react';
import ErrorPopUp from '../ErrorPopUp';

const RegisterGraduation = ({
  handleSubmitSection,
  HandleOnChange,
  graduationYear,
  password,
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
      className=""
    >
      <div className="flex flex-col gap-4 w-fit">
        <label htmlFor="graduationYear">Graduation Year</label>
        <input
          type="text"
          minLength={4}
          maxLength={4}
          placeholder="Graduation Year"
          required
          id="graduationYear"
          name="graduationYear"
          className="sign-input"
          value={graduationYear} // Ensure input fields are controlled components
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          minLength={6}
          placeholder="Password"
          required
          id="password"
          name="password"
          className="sign-input"
          value={password} // Ensure input fields are controlled components
          onChange={HandleOnChange}
        />
      </div>

      <div className="flex gap-2 ">
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
            graduationYear >= 2024 && graduationYear <= 2030
              ? handleSubmitSection()
              : setError(
                  <p>
                    Please enter a valid graduation year (maximum year 2030)
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

export default RegisterGraduation;
