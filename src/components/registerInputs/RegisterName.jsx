/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import { useEffect } from 'react';
import { useState } from 'react';

const RegisterName = ({
  handleSubmitSection,
  HandleOnChange,
  firstName,
  surName,
  gender,
}) => {
  useEffect(() => {});

  const handleInputChange = (event) => {
    const { value } = event.target;

    const regex = /^[A-Za-z]+$/;

    if (regex.test(value) || value === '') {
      HandleOnChange(event);
    }
  };

  const [selected, setSelected] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-5  flex flex-col  gap-y-4 "
    >
      <label htmlFor="firstName">First Name</label>
      <input
        className="sign-input"
        type="text"
        maxLength={30}
        placeholder="First Name"
        required
        id="firstName"
        name="firstName"
        value={firstName} // Ensure input fields are controlled components
        onChange={handleInputChange}
      />
      <label htmlFor="surName">Surname</label>
      <input
        className="sign-input"
        type="text"
        maxLength={30}
        placeholder="Surname"
        required
        id="surName"
        name="surName"
        value={surName} // Ensure input fields are controlled components
        onChange={handleInputChange}
      />

      <label
        htmlFor="gender"
        className="hidden sr-only "
        aria-hidden="gender"
      >
        {' '}
        Gender{' '}
      </label>

      <select
        name="gender"
        onChange={HandleOnChange}
        size="3"
        id="gender"
        className="bg-transparent text-black bg-white outline-none border-[2px] rounded-lg no-scrollbar "
        required
      >
        <option
          className={
            selected === 'Male'
              ? 'cursor-pointer bg-red-100 '
              : 'cursor-pointer '
          }
          value="Male"
          onClick={(e) => setSelected(e.target.value)}
        >
          {' '}
          Male{' '}
        </option>
        <option
          className={
            selected === 'Female'
              ? 'cursor-pointer bg-red-100 '
              : 'cursor-pointer '
          }
          value="Female"
          onClick={(e) => setSelected(e.target.value)}
        >
          {' '}
          Female{' '}
        </option>
        <option
          className={
            selected === 'Non-Binary'
              ? 'cursor-pointer bg-red-100 '
              : 'cursor-pointer '
          }
          value="Non-Binary"
          onClick={(e) => setSelected(e.target.value)}
        >
          {' '}
          Non-Binary{' '}
        </option>
      </select>
      <div className="flex">
        <button
          className="btn1 w-fit mt-7 hover:gap-4 transition-all ease-in-out duration-200"
          onClick={() => {
            surName && firstName && gender ? handleSubmitSection() : null;
          }}
        >
          Continue
          <FaChevronRight
            size={'11px'}
            color="#70757E"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default RegisterName;
