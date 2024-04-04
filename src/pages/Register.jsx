import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import { FaChevronRight } from 'react-icons/fa';
import RegisterName from '../components/registerInputs/RegisterName';
import RegisterHome from '../components/registerInputs/RegisterHome';
import RegisterContact from '../components/registerInputs/RegisterContact';
import RegisterDob from '../components/registerInputs/RegisterDob';
import RegisterGraduation from '../components/registerInputs/RegisterGraduation';
import RegisterComplete from '../components/registerInputs/RegisterComplete';
import { useSignup } from '../hooks/useSignup';

const Register = () => {
  useEffect(() => {
    console.log(data);
  });

  const [step, setStep] = useState(0);
  const { signup, error, isloading, setError } = useSignup();

  const [data, setData] = useState({
    firstName: '',
    surName: '',
    address: {
      postCode: '',
      streetName: '',
      city: '',
    },
    gender: '',
    dateOfBirthDay: '',
    dateOfBirthMonth: '',
    dateOfBirthYear: '',
    graduationYear: '',
    phoneNumber: '',
    emailAddress: '@example.com',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { ...data, ...data.address };

    delete user.address;

    await signup(user);

    const success = localStorage.getItem('user');

    if (success) {
      window.location.href = '/';
    }
  };

  const handleSubmitSection = () => {
    setStep(step + 1); // Move to the next step when the form is submitted
  };
  const handleSubmitBack = () => {
    setStep(step - 1); // Move to the next step when the form is submitted
  };

  const HandleOnChange = (event) => {
    event.preventDefault();

    if (event.target.name.startsWith('address.')) {
      const addressField = event.target.name.split('.')[1]; // Extract the nested field name
      setData({
        ...data,
        address: {
          ...data.address,
          [addressField]: event.target.value,
        },
      });
    } else {
      // If not nested, update the top-level state normally
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
    }
  };

  return (
    <section className="">
      <div className="  w-full">
        <Header />
      </div>

      <div>
        <div className="flex h-[100vh] dashboard-bg  lg:flex-row justify-center items-center">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex mr-10 flex-col items-center "
            >
              {step === 0 && (
                <div
                  className="flex flex-col justify-center items-center"
                  id="registration-start"
                >
                  <span className="text-[24px] ml-10 lg:ml-0">
                    Would you like to proceed with registration
                  </span>
                  <button
                    className="btn1 mt-7 hover:gap-4 transition-all ease-in-out duration-200"
                    onClick={() => {
                      handleSubmitSection();
                    }}
                  >
                    Continue
                    <FaChevronRight
                      size={'11px'}
                      color="#70757E"
                    />
                  </button>
                </div>
              )}

              <form
                className=" flex-col gap-y-4 flex"
                onSubmit={handleSubmit}
              >
                {step === 1 && (
                  <RegisterName
                    handleSubmitSection={handleSubmitSection}
                    HandleOnChange={HandleOnChange}
                    firstName={data.firstName}
                    surName={data.surName}
                    gender={data.gender}
                  />
                )}
                {step === 2 && (
                  <RegisterHome
                    handleSubmitSection={handleSubmitSection}
                    handleSubmitBack={handleSubmitBack}
                    HandleOnChange={HandleOnChange}
                    postCode={data.address.postCode}
                    streetName={data.address.streetName}
                    city={data.address.city}
                  />
                )}
                {step === 3 && (
                  <RegisterContact
                    handleSubmitSection={handleSubmitSection}
                    handleSubmitBack={handleSubmitBack}
                    HandleOnChange={HandleOnChange}
                    emailAddress={data.emailAddress}
                    phoneNumber={data.phoneNumber}
                  />
                )}
                {step === 4 && (
                  <RegisterDob
                    handleSubmitSection={handleSubmitSection}
                    handleSubmitBack={handleSubmitBack}
                    HandleOnChange={HandleOnChange}
                    day={data.dateOfBirthDay}
                    month={data.dateOfBirthMonth}
                    year={data.dateOfBirthYear}
                  />
                )}
                {step === 5 && (
                  <RegisterGraduation
                    handleSubmitSection={handleSubmitSection}
                    handleSubmitBack={handleSubmitBack}
                    HandleOnChange={HandleOnChange}
                    graduationYear={data.graduationYear}
                    password={data.password}
                  />
                )}
                {step === 6 && (
                  <RegisterComplete
                    data={data}
                    handleSubmitBack={handleSubmitBack}
                    error={error}
                    isloading={isloading}
                    setError={setError}
                  />
                )}
              </form>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Register;
