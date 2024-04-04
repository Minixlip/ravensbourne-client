/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import ErrorPopUp from '../ErrorPopUp';

const RegisterComplete = ({
  data,
  handleSubmitBack,
  error,
  isloading,
  setError,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-5 mx-2  flex flex-col  gap-y-4"
    >
      <div className="flex flex-col text-white gap-4 ml-2 tracking-wide">
        <div className="mb-5 mt-10 text-xl">
          <span className="font-bold text-white">
            Check your details <br /> Press confirm to complete registration
          </span>
        </div>
        <span className="font-bold flex justify-center">Personal Details</span>
        <div className="flex flex-col gap-5">
          <span className="font-semibold">
            First Name:{' '}
            <span className="text-primaryTxt">
              {data.firstName.toUpperCase()}
            </span>
          </span>
          <span className="font-semibold">
            Surname:{' '}
            <span className="text-primaryTxt">
              {data.surName.toUpperCase()}
            </span>
          </span>
          <span className="font-semibold">
            Gender:{' '}
            <span className="text-primaryTxt">{data.gender.toUpperCase()}</span>
          </span>
          <span className="font-semibold">
            DOB:{' '}
            <span className="text-primaryTxt">
              {data.dateOfBirthDay} {data.dateOfBirthMonth}{' '}
              {data.dateOfBirthYear}
            </span>
          </span>
          <span className="font-semibold">
            Year of graduation:{' '}
            <span className="text-primaryTxt">{data.graduationYear}</span>
          </span>
          <span className="font-semibold">
            Phone number:{' '}
            <span className="text-primaryTxt">{data.phoneNumber}</span>
          </span>
          <span className="font-semibold">
            Email address:{' '}
            <span className="text-primaryTxt">
              {data.emailAddress.toUpperCase()}
            </span>
          </span>
        </div>
        <hr className="my-4" />
        <span className="font-bold flex justify-center">Location details</span>
        <div className="flex flex-col gap-5">
          <span className="font-semibold">
            Post code:{' '}
            <span className="text-primaryTxt">{data.address.postCode}</span>
          </span>
          <span className="font-semibold">
            Street name:{' '}
            <span className="text-primaryTxt">
              {data.address.streetName.toUpperCase()}
            </span>
          </span>
          <span className="font-semibold">
            City:{' '}
            <span className="text-primaryTxt">
              {data.address.city.toUpperCase()}
            </span>
          </span>
        </div>
        <div className="flex gap-x-6 ">
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
            disabled={isloading}
            className="btn1 w-fit mt-7 hover:gap-4 transition-all ease-in-out duration-200"
            type="submit"
          >
            Confirm
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
      </div>
    </motion.div>
  );
};

export default RegisterComplete;
