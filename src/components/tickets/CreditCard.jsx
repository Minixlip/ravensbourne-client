/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useCheckCard } from '../../hooks/useCheckCard';
import { useCreateTicket } from '../../hooks/useTicket';
import { motion } from 'framer-motion';
import ErrorPopUp from '../../components/ErrorPopUp';
import PopUp from '../../components/PopUp';

const CreditCard = ({ resTicket, data }) => {
  const { checkCard, error, isLoading, resCard, success } = useCheckCard();
  const { createTicket } = useCreateTicket();

  const [creditCard, setCreditCard] = useState({
    cardFullName: '',
    cardNumber: '',
    cardCVC: '',
    cardExpiryDay: '',
    cardExpiryYear: '',
    totalPrice: resTicket,
  });

  useEffect(() => {
    setCreditCard({ ...creditCard, totalPrice: resTicket });

    if (resCard) {
      // Wait for 3 seconds before redirecting
      setTimeout(() => {
        window.location.href = '/Dashboard';
      }, 1000); // 3000 milliseconds = 3 seconds
    }
  }, [resTicket, resCard]);

  useEffect(() => {
    const makeTicket = async () => {
      if (success) {
        await createTicket(data);
      }
    };
    makeTicket();
  }, [success]);

  const handlePayment = async (e) => {
    e.preventDefault();

    await checkCard(creditCard);
    if (success) {
      await createTicket(data);
    }
  };

  const HandleChange = (e) => {
    const { value, id } = e.target;

    if (id.includes('cardFullName')) {
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (nameRegex.test(value) || value === '') {
        setCreditCard({ ...creditCard, [id]: value });
      }
      return;
    }
    if (
      id.includes('cardNumber') ||
      id.includes('cardExpiryDay') ||
      id.includes('cardExpiryYear') ||
      id.includes('cardCVC')
    ) {
      const numberRegex = /^[0-9]+$/;
      if (numberRegex.test(value) || value === '') {
        setCreditCard({ ...creditCard, [id]: value });
      }
      return;
    }
  };

  return (
    <motion.div
      initial={{
        background: 'linear-gradient(280deg, #0a0a0a 0%, #171717 40%)',
      }}
      animate={{
        background: 'linear-gradient(80deg, #0a0a0a 0%, #171717 40%)',
      }}
      transition={{
        ease: 'easeInOut',
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      className="flex flex-col  px-6 py-4 rounded-xl rounded-t-none mt-2 "
    >
      <div className="flex flex-col ">
        <label
          htmlFor="cardFullName"
          className="sr-only"
        >
          Card holders name
        </label>
        <input
          type="text"
          placeholder="Card Name"
          id="cardFullName"
          name="cardFullName"
          value={creditCard.cardFullName}
          className="mt-3 w-fit ticket-input"
          onChange={(e) => HandleChange(e)}
          required
        ></input>
      </div>
      <div className="flex flex-col mt-4">
        <label
          className="mt-4 sr-only"
          htmlFor="cardNumber"
        >
          Card number
        </label>
        <input
          type="text"
          placeholder="Card Number"
          id="cardNumber"
          name="cardNumber"
          value={creditCard.cardNumber}
          onChange={(e) => HandleChange(e)}
          minLength={16}
          maxLength={16}
          className="mt-3 w-fit ticket-input"
          required
        ></input>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex-col flex">
          <label
            className="mt-4 "
            htmlFor="cardExpiryDay"
          >
            Expiry Day
          </label>
          <input
            id="cardExpiryDay"
            name="cardExpiryDay"
            type="text"
            placeholder="Day"
            className="mt-3 max-w-[80px] ticket-input"
            value={creditCard.cardExpiryDay}
            onChange={(e) => HandleChange(e)}
            maxLength={2}
            minLength={2}
            required
          ></input>
        </div>
        <div className="flex-col flex">
          <label
            className="mt-4"
            htmlFor="cardExpiryYear"
          >
            Expiry Year
          </label>
          <input
            id="cardExpiryYear"
            name="cardExpiryYear"
            placeholder="Year"
            type="text"
            className="mt-3 max-w-[80px] ticket-input"
            value={creditCard.cardExpiryYear}
            onChange={(e) => HandleChange(e)}
            maxLength={2}
            minLength={2}
            required
          ></input>
        </div>
        <div className="flex-col flex">
          <label
            className="mt-4"
            htmlFor="cardCVC"
          >
            CVC
          </label>
          <input
            id="cardCVC"
            name="cardCVC"
            placeholder="CVC"
            type="text"
            className="mt-3 max-w-[80px] ticket-input"
            value={creditCard.cardCVC}
            onChange={(e) => HandleChange(e)}
            required
            maxLength={3}
            minLength={3}
          ></input>
        </div>
      </div>
      <div className="flex items-end justify-between mb-4 mt-7">
        <button
          disabled={isLoading}
          className="btn1 w-fit  hover:gap-4 transition-all ease-in-out duration-200"
          onClick={(e) => handlePayment(e)}
        >
          Pay
          <FaChevronRight
            size={'11px'}
            color="#70757E"
          />
        </button>
        {!resCard && resTicket && (
          <span className="text-white tracking-wider font-semibold">
            Amount due £{resTicket}
          </span>
        )}
      </div>

      <div className="flex flex-col mx-2">
        {error && <ErrorPopUp error={error} />}
        {resCard && (
          <PopUp
            message={resCard.message}
            balance={resCard.balance}
          />
        )}
      </div>
    </motion.div>
  );
};

export default CreditCard;
