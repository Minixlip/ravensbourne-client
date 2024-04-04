/* eslint-disable react/prop-types */
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import CreditCard from "../components/tickets/CreditCard";
import { FaChevronRight, FaExclamationTriangle } from "react-icons/fa";
import { useCheckTicket } from "../hooks/useCheckTicket";
import { motion } from "framer-motion";
import ErrorPopUp from "../components/ErrorPopUp";
import eventPhoto from "../assets/eric-esma.jpg";
import o2Photo from "../assets/02-arena.jpg";

const Payment = ({ eventName }) => {
  const { user } = useAuthContext();
  const { checkTicket, error, isLoading, resTicket, success } =
    useCheckTicket();
  const [data, setData] = useState({
    emailAddress: user ? user.emailAddress : "",
    userId: user ? user.userid : "",
    firstName: user ? user.firstName : "",
    surName: user ? user.surName : "",
    event: eventName ? eventName : "Ravensbourne Graduation Party",
    firstGuestName: "",
    firstGuestDOB: "",
    secondGuestName: "",
    secondGuestDOB: "",
    guestCount: 0,
  });

  const [validData, setValidData] = useState(false);
  const [visiblityForm, setVisiblityForm] = useState("flex");
  const [errorInput, setErrorInput] = useState(null);
  const [step, setStep] = useState(1);
  const [privacyCheck, setPrivacycheck] = useState(false);

  useEffect(() => {
    if (user) {
      setData((prevData) => ({
        ...prevData,
        firstName: user.firstName,
        surName: user.surName,
        userId: user.userid,
      }));
    }
  }, [user]);

  useEffect(() => {
    if (success) {
      setVisiblityForm("none");
      setStep(2);
    }
  }, [success]);

  const ProceedToPayment = (e) => {
    e.preventDefault();

    if (data.guestCount === 0) {
      setData({ ...data, firstName: user.firstName, surName: user.surName });
      setValidData(true);
      return;
    }

    if (data.guestCount) {
      if (data.guestCount === 1) {
        if (data.firstGuestName && data.firstGuestDOB) {
          setData({
            ...data,
            firstName: user.firstName,
            surName: user.surName,
          });
          setValidData(true);
          return;
        }
      }
      if (data.guestCount === 2) {
        if (data.secondGuestName && data.secondGuestDOB) {
          setData({
            ...data,
            firstName: user.firstName,
            surName: user.surName,
          });
          setValidData(true);
          return;
        }
      }
    }
    setValidData(false);
    setErrorInput("Please fill out all details");
  };

  const HandleClick = (e) => {
    e.preventDefault();
    const { value, id } = e.target;

    if (id === "guestCount") {
      setData({
        ...data,
        firstGuestName: "",
        secondGuestName: "",
        guestCount: parseInt(value),
      });
      return;
    }

    setData({ ...data, [id]: value });
  };

  const HandleChange = (e) => {
    e.preventDefault();
    const { value, id } = e.target;

    // Validation for guest names (only allow letters and spaces)
    if (id.includes("GuestName")) {
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (nameRegex.test(value) || value === "") {
        setData({ ...data, [id]: value });
      }
      return;
    }

    setData({ ...data, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ticket = { ...data };

    await checkTicket(ticket);

    ProceedToPayment(e);
  };

  return (
    <section className=" dashboard-bg pb-10 ">
      <div className="absolute w-full ">
        <Header />
      </div>

      <div
        id="options"
        className="mx-2  gap-y-4 h-[160vh] xl:h-[180vh] xl:flex-row  flex-col-reverse flex justify-center gap-x-10 "
      >
        <form className=" flex flex-col justify-start lg:pt-24">
          <div className="flex flex-col max-w-[700px]">
            <motion.div
              initial={{
                background: "linear-gradient(280deg, #0a0a0a 0%, #171717 40%)",
              }}
              animate={{
                background: "linear-gradient(80deg, #0a0a0a 0%, #171717 40%)",
              }}
              transition={{
                ease: "easeInOut",
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="flex flex-col justify-center items-center rounded-2xl rounded-b-none py-4"
            >
              <h1 className="text-3xl text-white font-bold">SECURE CHECKOUT</h1>
            </motion.div>
            <hr />
            <motion.div
              initial={{
                background: "linear-gradient(280deg, #0a0a0a 0%, #171717 40%)",
              }}
              transition={{
                ease: "easeInOut",
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-white flex px-6 py-4 justify-center items-center"
            >
              <div className="flex flex-col items-center">
                <span
                  className={
                    step === 1
                      ? "bg-blue-800 px-4 py-2 rounded-full"
                      : "px-4 py-2 border rounded-full border-gray-500 text-gray-500"
                  }
                >
                  1
                </span>
                <span>Your order</span>
              </div>
              <hr className="w-[100px]" />
              <div className="flex flex-col items-center">
                <span
                  className={
                    step === 2
                      ? "bg-blue-800 px-4 py-2 rounded-full"
                      : "px-4 py-2 border rounded-full border-gray-500 text-gray-500"
                  }
                >
                  2
                </span>
                <span>Payment</span>
              </div>
              <hr className="w-[100px]" />
              <div className="flex flex-col items-center">
                <span
                  className={
                    step === 3
                      ? "bg-blue-800 px-4 py-2 rounded-full"
                      : "px-4 py-2 border rounded-full border-gray-500 text-gray-500"
                  }
                >
                  3
                </span>
                <span>Confirmation</span>
              </div>
            </motion.div>
            <div className="h-[10px] bg-yellow-500"></div>
            <motion.div
              initial={{
                background: "linear-gradient(280deg, #0a0a0a 0%, #171717 40%)",
              }}
              transition={{
                ease: "easeInOut",
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="flex px-6 py-5 gap-2 items-center">
                <span className="text-yellow-500">
                  <FaExclamationTriangle />
                </span>
                <span className="font-semibold">
                  Proceed to payment to reserve these tickets
                </span>
              </div>
            </motion.div>

            <motion.div
              style={{ display: visiblityForm }}
              initial={{
                background: "linear-gradient(280deg, #0a0a0a 0%, #171717 40%)",
              }}
              transition={{
                ease: "easeInOut",
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className=" flex-col mt-4"
            >
              <div className="flex px-6 py-4">
                <span className="text-xl text-white font-semibold">
                  Your details
                </span>
              </div>
              <hr />
              <div className="flex flex-col px-16 py-4">
                <div className="flex flex-row justify-between flex-1">
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">First Name</span>
                    <span className="px-4 py-4 font-semibold">
                      {data.firstName}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">Surname</span>
                    <span className="px-4 py-4 font-semibold">
                      {data.surName}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{ display: visiblityForm }}
              initial={{
                background: "linear-gradient(280deg, #0a0a0a 0%, #171717 40%)",
              }}
              transition={{
                ease: "easeInOut",
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mt-2 px-6 py-4 flex-col"
            >
              <div className="flex flex-col gap-2">
                <span className="text-white font-semibold text-xl">Guests</span>
                <span>Please select how many guests you would like</span>
              </div>
              <div>
                <select
                  name="GuestCount"
                  size="3"
                  id="GuestCount"
                  defaultValue={0}
                  className=" bg-transparent text-white outline-none  p-6  overflow-y-hidden  tracking-wider"
                  required
                >
                  <option
                    className="cursor-pointer mb-2 "
                    value={0}
                    id="guestCount"
                    name="GuestCount"
                    onClick={(e) => HandleClick(e)}
                  >
                    0 Guests
                  </option>
                  <option
                    className="cursor-pointer mb-2"
                    value={1}
                    id="guestCount"
                    name="GuestCount"
                    onClick={(e) => HandleClick(e)}
                  >
                    1 Guests
                  </option>
                  <option
                    className="cursor-pointer"
                    value={2}
                    id="guestCount"
                    name="GuestCount"
                    onClick={(e) => HandleClick(e)}
                  >
                    2 Guests
                  </option>
                </select>
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                {data.guestCount >= 1 && (
                  <div className="flex flex-col rounded-2xl max-w-[50%] mt-4 gap-2 ">
                    <label htmlFor="firstGuestName" className=" sr-only">
                      Guest 1 Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Guest 1 Full Name"
                      id="firstGuestName"
                      name="firstGuestName"
                      className="ticket-input"
                      value={data.firstGuestName}
                      onChange={(e) => HandleChange(e)}
                    ></input>
                    <label htmlFor="firstGuestDOB">Date of birth</label>
                    <input
                      id="firstGuestDOB"
                      name="firstGuestDOB"
                      type="date"
                      className="ticket-input"
                      value={data.firstGuestDOB}
                      onChange={(e) => HandleChange(e)}
                    ></input>
                  </div>
                )}
                {data.guestCount >= 2 && (
                  <div className="flex flex-col rounded-2xl  mt-4 gap-2 max-w-[50%]">
                    <label htmlFor="secondGuestName" className="sr-only">
                      Guest 2 Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Guest 2 Full Name"
                      id="secondGuestName"
                      name="secondGuestName"
                      className="ticket-input"
                      value={data.secondGuestName}
                      onChange={(e) => HandleChange(e)}
                    ></input>
                    <label htmlFor="secondGuestDOB">Date of birth</label>
                    <input
                      id="secondGuestDOB"
                      name="secondGuestDOB"
                      type="date"
                      className="ticket-input"
                      value={data.secondGuestDOB}
                      onChange={(e) => HandleChange(e)}
                    ></input>
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div
              style={{ display: visiblityForm }}
              initial={{
                background: "linear-gradient(280deg, #0a0a0a 0%, #171717 40%)",
              }}
              transition={{
                ease: "easeInOut",
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="flex-col mt-4 px-8 py-6"
            >
              <div className="flex gap-4 items-center">
                <label htmlFor="ticketPolicy" className="sr-only">
                  Ticket Exchange Policy
                </label>
                <input
                  type="checkbox"
                  id="ticketPolicy"
                  required
                  value={privacyCheck}
                  onChange={() => setPrivacycheck(!privacyCheck)}
                />
                <span>
                  I agree to the{" "}
                  <a href="/" className="text-blue-500">
                    Ticket Exchange Policy
                  </a>
                </span>
              </div>
              <div className="mt-6">
                <span>Please also note:</span>
                <ul className="mt-6 flex flex-col gap-2">
                  <li className="text-white font-semibold">
                    a{")"} Resale Tickets cannot be exchanged or refunded after
                    purchase, save as provided in our Ticket Exchange Policy.{" "}
                  </li>
                  <li>
                    b{")"} We may cancel any order{"(s)"} in breach of our
                    Ticket Exchange Policy without notice.{" "}
                  </li>
                  <li>
                    c{")"} All orders are subject to account approval and
                    billing address verification.
                  </li>
                  <li>
                    d{")"} We will provide the organiser of this event with your
                    information for the purposes of event management, analytics,
                    marketing (where you have consented) and as further
                    described in their privacy policy. The organiser may
                    disclose your information to others involved in the event
                    where necessary for event management. Please see our Privacy
                    Notice for further information including how to exercise
                    your data privacy rights.
                  </li>
                </ul>
              </div>
            </motion.div>
            <div style={{ display: visiblityForm }} className=" justify-center">
              <button
                disabled={isLoading}
                onClick={(e) =>
                  privacyCheck
                    ? handleSubmit(e)
                    : setErrorInput(
                        "Please read the ticket policy and click it to confirm"
                      )
                }
                className="btn1 w-fit mt-7 hover:gap-4 transition-all ease-in-out duration-200"
                type="submit"
              >
                Proceed to payment
                <FaChevronRight size={"11px"} color="#70757E" />
              </button>
            </div>
            {validData && !error && (
              <motion.div
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className="flex-1 "
              >
                <CreditCard resTicket={resTicket} data={data} />
              </motion.div>
            )}
          </div>

          {error && <ErrorPopUp error={error} />}
          {errorInput && (
            <ErrorPopUp error={errorInput} setError={setErrorInput} />
          )}
        </form>

        <div className=" flex pt-24 flex-col max-w-[700px]  ">
          <motion.div
            initial={{
              background: "linear-gradient(280deg, #0a0a0a 0%, #171717 40%)",
            }}
            animate={{
              background: "linear-gradient(80deg, #0a0a0a 0%, #171717 40%)",
            }}
            transition={{
              ease: "easeInOut",
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex px-6 py-5 rounded-lg rounded-b-none items-center gap-4"
          >
            <div className="flex h-[100px]">
              <img src={eventPhoto} className="max-h-full px-2 rounded-lg" />
            </div>
            <div className="flex-1 flex flex-col text-white">
              <span className="font-bold mb-4">{data.event}</span>
              <span>Sat, 27 Apr 2024, 19:00</span>
              <span>02 institute London,</span>
              <span>London, GB</span>
            </div>
            <div className=" flex flex-col text-white items-start ">
              <span className="font-bold mb-4"> Price list</span>
              <span>Graduate £40</span>
              <span>Guest 18+ £20</span>
              <span>Guest U18 £20</span>
            </div>
          </motion.div>
          <div className="bg-red-600 text-nowrap overflow-hidden flex gap-6">
            <span>MJ Entertainment</span>
            <span>MJ Entertainment</span>
            <span>MJ Entertainment</span>
            <span>MJ Entertainment</span>
            <span>MJ Entertainment</span>
            <span>MJ Entertainment</span>
            <span>MJ Entertainment</span>
          </div>
          <motion.div
            initial={{
              background: "linear-gradient(280deg, #0a0a0a 0%, #171717 40%)",
            }}
            transition={{
              ease: "easeInOut",
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="py-8 px-6">
              <span className="text-white tracking-wide">
                Under 18s Welcome. Under 18s to be accompanied at all times by
                an adult over 18. Under 25s require ID to purchase alcohol. A
                max of 2 tickets per person and per household applies for the
                presale.
              </span>
            </div>
          </motion.div>
          <hr />
          <motion.div
            initial={{
              background: "linear-gradient(280deg, #0a0a0a 0%, #171717 40%)",
            }}
            transition={{
              ease: "easeInOut",
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex flex-col"
          >
            <div className="py-8 px-6 flex-col flex text-white">
              <span className="font-semibold text-xl tracking-wide">
                TICKET TYPE
              </span>
              <span className="font-semibold text-lg tracking-wide">
                Full Price Ticket
              </span>
            </div>
          </motion.div>
          <hr />
          <motion.div
            initial={{
              background: "linear-gradient(280deg, #0a0a0a 0%, #171717 40%)",
            }}
            transition={{
              ease: "easeInOut",
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex flex-col"
          >
            <div className="py-8 px-6 flex-col flex text-white">
              <span className="font-semibold text-xl tracking-wide">
                SECTION
              </span>
              <span className="font-semibold text-lg tracking-wide">
                Stalls
              </span>
            </div>
          </motion.div>
          <hr />
          <motion.div
            initial={{
              background: "linear-gradient(280deg, #0a0a0a 0%, #171717 40%)",
            }}
            transition={{
              ease: "easeInOut",
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className=""
          >
            <div className="px-6 py-8 flex justify-center">
              <img src={o2Photo} className="max-h-[200px] rounded-md" />
            </div>
          </motion.div>
          <hr />
          <motion.div
            initial={{
              background: "linear-gradient(280deg, #0a0a0a 0%, #171717 40%)",
            }}
            transition={{
              ease: "easeInOut",
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="h-[100px] rounded-b-xl"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
