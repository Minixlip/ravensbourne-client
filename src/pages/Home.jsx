import Header from '../components/Header';
import { FaArrowCircleRight, FaChevronRight } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import profileIcon1 from '../assets/profileIcon1.jpg';
import profileIcon2 from '../assets/profileIcon2.jpg';
import profileIcon3 from '../assets/profileIcon3.jpg';
import profileIcon4 from '../assets/profileIcon4.jpg';

import { ImCross } from 'react-icons/im';
import { useState } from 'react';

const slides = [
  {
    name: 'Google',
  },
  {
    name: 'Spotify',
  },
  {
    name: 'Discord',
  },
  {
    name: 'Netflix',
  },
  {
    name: 'Slack',
  },
  {
    name: 'Dropbox',
  },
  { name: 'Disney' },
];

const arrow = {
  initial: { x: 0, scale: 1 },
  animate: { x: 20, scale: 1.1 },
};

const Home = () => {
  const duplicatedSlides = [...slides, ...slides];
  const [faqActive, setFaqActive] = useState(null);

  const faqShow = (e) => {
    const text = e.target.textContent;

    if (text === faqActive) {
      return setFaqActive(null);
    }

    setFaqActive(text);
  };

  const eventRef = useRef(null);
  const personalRef = useRef(null);

  // Event handler for the button click
  const scrollToCard = (ref) => {
    // Scroll to the top of the card

    if (ref === eventRef) {
      eventRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (ref === personalRef) {
      personalRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="home-bg">
      <div className=" absolute w-full z-50 ">
        <Header />
      </div>
      <div className="home-bg h-screen flex flex-col lg:flex-row tracking-wide w-full">
        <div className=" flex-1 text-white flex flex-col lg:pl-20 pb-20 justify-center lg:justify-center ">
          <motion.span
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.8 }}
            className="lg:ml-3 mx-4 "
          >
            {' '}
            Upcoming Event :{' '}
            <span className="text-red-500 tracking-wider">
              Ravensbourne Graduation Party
            </span>
          </motion.span>
          <motion.span
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.8 }}
            className="lg:ml-3 mx-4"
          >
            {' '}
            Apr 27,2024 - 4pm
          </motion.span>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.8 }}
            className="lg:mt-4 mt-4 mx-4"
          >
            <h1 className="text-[40px] text-wrap lg:text-7xl font-semibold">
              MJ Entertainment
            </h1>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.5 }}
            className="lg:ml-4 text-wrap pt-10 mx-4 "
          >
            <span className="text-secondaryTxt lg:text-xl">
              Discover unforgettable experiences and create lasting memories
              with our diverse array of events tailored to every interest and
              passion.
            </span>
          </motion.div>
          <div className=" flex flex-col lg:flex-row items-start ml-4 mt-9 gap-4 ">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'spring', duration: 0.3 }}
              onClick={() => scrollToCard(eventRef)}
              className="z-10 tracking-wider border-[1px] border-white px-16 py-4 rounded-full border-opacity-50 hover:border-opacity-100 ease-in-out transition-all "
            >
              Discover more
            </motion.button>
            <Link to={'/payment'}>
              <motion.button
                initial={{
                  opacity: 0,
                  background:
                    'linear-gradient(45deg, #b91c1c 50%, #450a0a 94%, #0b0b0b 95%)',
                }}
                animate={{ opacity: 1 }}
                whileHover={{
                  background:
                    'linear-gradient(225deg, #b91c1c 40%, #b91c1c 80%, #450a0a 98%)',
                }} // Change background color on hover
                transition={{
                  ease: 'easeOut',
                  duration: 1,
                }}
                className="z-10 tracking-wider home-btn2 px-16 py-4 rounded-full flex items-center relative group "
              >
                Get your tickets{' '}
                <FaChevronRight
                  size={'20px'}
                  className="absolute right-10 group-hover:right-6 ease-in-out transition-all duration-300"
                />
              </motion.button>
            </Link>
          </div>
        </div>
        <div className=" relative ml-4 lg:flex-1 flex justify-center items-end homeBgImg  bg-center bg-cover"></div>
      </div>
      <section className="home-bg-2">
        <div className="h-[320vh] lg:h-[185vh] flex flex-col pt-10 home-bg2 ">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
            ref={eventRef}
            className="ml-2 text-[#5F6FCF] border border-transparent px-4 w-fit py-1 rounded-full bg-[#1F1D31] bg-opacity-50 tracking-wide font-bold lg:ml-10"
          >
            Events
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
            className="ml-2 text-gradient text-5xl mt-6 lg:ml-10"
          >
            Learn about our events
          </motion.span>
          <div className=" flex flex-col pt-16 ml-4">
            <div className="flex flex-col lg:flex-row gap-y-6">
              <div className="flex-1 flex">
                <motion.div
                  initial={{
                    backgroundSize: '100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0,
                  }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    backgroundSize: '150%',
                  }}
                  transition={{ ease: 'easeInOut', duration: 0.8 }}
                  className=" bg-cover h-[300px] w-[280px] lg:h-[600px] lg:w-[80%] lg:flex flex-col justify-between border border-transparent py-8 px-6 rounded-3xl panel-photo-1 cursor-pointer lg:ml-20"
                >
                  <span className="text-white font-semibold">
                    Who to attend
                  </span>
                  <div className="h-full flex items-end">
                    <span className="flex-1 lg:text-5xl text-white">
                      Eric Esma
                    </span>
                    <span className=" lg:inline-flex flex-1 text-white lg:text-xl text-wrap">
                      Secure your spot for one of the best events of this year
                    </span>
                  </div>
                </motion.div>
              </div>
              <div className="flex-1 flex flex-col lg:justify-between lg:items-end mr-12 gap-y-6 ">
                <motion.div
                  initial={{
                    background:
                      'linear-gradient(280deg, #0c0a09 0%, #1c1917 40%)',
                    opacity: 0,
                  }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    background:
                      'linear-gradient(80deg, #0c0a09 0%, #1c1917 40%)',
                  }}
                  transition={{ ease: 'easeInOut', duration: 0.8 }}
                  className="h-[300px] w-[280px] lg:w-[80%] flex flex-col justify-between py-8 px-6 rounded-3xl panel-1 cursor-pointer "
                >
                  <span className="text-white font-semibold">Location</span>
                  <div className="flex items-end">
                    <span className="flex-1 text-2xl lg:text-5xl text-white">
                      London
                    </span>
                    <span className=" flex-1 text-white lg:text-xl text-wrap">
                      See where the event will take place and plan ahead
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{
                    background:
                      'linear-gradient(97deg, #292524 0%, #44403c 30%,#57534e 80%)',
                    opacity: 0,
                  }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    background:
                      'linear-gradient(263deg, #292524 0%, #44403c 30%,#57534e 80%)',
                  }}
                  transition={{ ease: 'easeInOut', duration: 0.8 }}
                  // Change background color on hover
                  className="h-[200px] w-[280px] lg:w-[50%] flex flex-col justify-between py-8 px-6 rounded-3xl panel-2 cursor-pointer "
                >
                  <span className="text-white font-semibold">Booking</span>
                  <div className="flex items-center">
                    <span className="flex-1 text-3xl text-white">
                      Get tickets
                    </span>
                    <span className=" text-white text-xl text-wrap">
                      <FaArrowCircleRight size={'30px'} />
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 justify-evenly gap-6">
              <motion.div
                initial={{
                  background:
                    'linear-gradient(280deg, #0a0a0a 0%, #171717 40%)',
                  scale: 0.5,
                  opacity: 0,
                }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{
                  background: 'linear-gradient(80deg, #0a0a0a 0%, #171717 40%)',
                }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
                // Change background color on hover
                className="border border-black h-[300px] w-[90%] lg:w-[30%] flex flex-col justify-between py-8 px-6 rounded-3xl panel-2 cursor-pointer "
              >
                <span className="text-white font-semibold text-xl">Learn</span>
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <span className="flex-1 text-3xl text-white">
                      Workshops
                    </span>
                    <span className="flex-1 text-xl text-secondaryTxt">
                      Reserve your place at one of this year&#39;s top
                      gatherings
                    </span>
                  </div>

                  <span className=" text-white text-xl text-wrap">
                    <FaArrowCircleRight size={'30px'} />
                  </span>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  background:
                    'linear-gradient(280deg, #0a0a0a 0%, #171717 40%)',
                  scale: 0.5,
                  opacity: 0,
                }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{
                  background: 'linear-gradient(80deg, #0a0a0a 0%, #171717 40%)',
                }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
                // Change background color on hover
                className="border border-black h-[300px] w-[90%] lg:w-[30%] flex flex-col justify-between py-8 px-6 rounded-3xl panel-2 cursor-pointer "
              >
                <span className="text-white font-semibold text-xl">Extras</span>
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <span className="flex-1 text-3xl text-white">
                      Exclusive Talks
                    </span>
                    <span className="flex-1 text-xl text-secondaryTxt">
                      Gain knowledge from specialists and pioneers in the
                      industry.
                    </span>
                  </div>

                  <span className=" text-white text-xl text-wrap">
                    <FaArrowCircleRight size={'30px'} />
                  </span>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  background:
                    'linear-gradient(280deg, #0a0a0a 0%, #171717 40%)',
                  scale: 0.5,
                  opacity: 0,
                }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{
                  background: 'linear-gradient(80deg, #0a0a0a 0%, #171717 40%)',
                }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
                // Change background color on hover
                className="border border-black h-[300px] w-[90%] lg:w-[30%] flex flex-col justify-between py-8 px-6 rounded-3xl panel-2 cursor-pointer "
              >
                <span className="text-white font-semibold text-xl">
                  Have fun
                </span>
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <span className="flex-1 text-3xl text-white">
                      Closing Party
                    </span>
                    <span className="flex-1 text-xl text-secondaryTxt">
                      Reserve your place at one of the top events of this year
                    </span>
                  </div>

                  <span className=" text-white text-xl text-wrap">
                    <FaArrowCircleRight size={'30px'} />
                  </span>
                </div>
              </motion.div>
            </div>
            <div className="pt-20 flex justify-center items-center">
              <span className="text-2xl tracking-wider select-none">
                Sponsors
              </span>
            </div>
            <div className="mt-10">
              <div className=" w-full overflow-hidden">
                {/* Wrapping div for seamless looping */}
                <motion.div
                  className="flex"
                  animate={{
                    x: ['-200%', '0%'],
                    transition: {
                      ease: 'linear',
                      duration: 15,
                      repeat: Infinity,
                    },
                  }}
                >
                  {/* Render duplicated slides */}
                  {duplicatedSlides.map((slide, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0"
                      style={{ width: `${150 / slides.length}%` }}
                    >
                      <div className="flex flex-col items-center justify-center h-full  lg:text-5xl">
                        {slide.name}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="h-[110vh] lg:h-[90vh]">
            <motion.div
              initial={{
                scale: 0.5,
                opacity: 0,
              }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.5 }}
              className=" justify-center items-center flex flex-col"
            >
              <span className="tracking-wider text-2xl">Testimonials</span>
              <div className=" mx-2 lg:w-[50%] mt-10">
                <p className="text-2xl lg:text-3xl text-white">
                  &#34;Attending events through this website has truly been a
                  game-changer for me! From unforgettable concerts to thrilling
                  sports matches and side-splitting comedy shows, every
                  experience has left me wanting more. The user-friendly
                  interface makes browsing and booking a breeze, and the variety
                  of events ensures there&#39;s always something for everyone. I
                  highly recommend this platform to anyone looking for an
                  extraordinary entertainment experience!&#34;
                </p>
              </div>
              <div className="mt-10">
                <div className="flex flex-col lg:flex-row gap-2 items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={profileIcon1}
                      className="h-16 w-16 rounded-full "
                    />
                    <img
                      src={profileIcon2}
                      className="h-10 w-10 rounded-full opacity-50"
                    />
                    <img
                      src={profileIcon3}
                      className="h-10 w-10 rounded-full opacity-50"
                    />
                    <img
                      src={profileIcon4}
                      className="h-10 w-10 rounded-full opacity-50"
                    />
                  </div>
                  <span>Freya Patterson + 4k more</span>
                </div>
              </div>
            </motion.div>
          </div>
          <section>
            <div className="h-[240vh] lg:h-[100vh]">
              <div className="flex flex-col ">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: 'easeInOut', duration: 0.9 }}
                  className="ml-2 text-[#5F6FCF] border border-transparent px-4 w-fit py-1 rounded-full bg-[#1F1D31] bg-opacity-50 tracking-wide font-bold lg:ml-10"
                >
                  Venue
                </motion.span>
                <div className="mt-6 lg:ml-10">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9 }}
                    className="ml-2 text-gradient2 text-5xl "
                  >
                    Expect only the best
                  </motion.span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-evenly pt-20 gap-y-10 ml-4 lg:ml-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={'animate'}
                  transition={{ ease: 'easeInOut', duration: 0.5 }}
                  className="flex flex-col  w-[90%] lg:w-[30%] cursor-pointer group"
                >
                  <div className="venue-photo-1 h-[380px] rounded-2xl"></div>
                  <div className="flex justify-between mt-10 items-center ">
                    <span className="text-gradient2 text-3xl font-semibold">
                      Seminars <br /> Webinars
                    </span>
                    <motion.span
                      variants={arrow}
                      className="text-violet-400 mr-4 "
                    >
                      <FaArrowCircleRight size={'35px'} />
                    </motion.span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={'animate'}
                  transition={{ ease: 'easeInOut', duration: 0.5 }}
                  className="flex flex-col  w-[90%] lg:w-[30%] cursor-pointer group"
                >
                  <div className="venue-photo-2 h-[380px] rounded-2xl"></div>
                  <div className="flex justify-between mt-10 items-center ">
                    <span className="text-gradient2 text-3xl">
                      Clubs & <br /> Pubs
                    </span>
                    <motion.span
                      variants={arrow}
                      className="text-violet-400 mr-4  "
                    >
                      <FaArrowCircleRight size={'35px'} />
                    </motion.span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={'animate'}
                  transition={{ ease: 'easeInOut', duration: 0.5 }}
                  className="flex flex-col  w-[90%] lg:w-[30%] cursor-pointer group"
                >
                  <div className="venue-photo-3 h-[380px] rounded-2xl"></div>
                  <div className="flex justify-between mt-10 items-center ">
                    <span className="text-gradient2 text-3xl">
                      Futuristic <br /> Exhibits
                    </span>
                    <motion.span
                      variants={arrow}
                      className="text-violet-400 mr-4  "
                    >
                      <FaArrowCircleRight size={'35px'} />
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </div>
            <section>
              <div className="h-[110vh] lg:h-[80vh]">
                <div className="flex flex-col justify-center items-center gap-10 tracking-wide font-semibold text-[#D3CBEA] ">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9 }}
                    className=" text-[#5F6FCF] border border-transparent px-4 w-fit py-1 rounded-full bg-[#1F1D31] bg-opacity-50 tracking-widest font-bold "
                  >
                    FAQ
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9 }}
                    className="text-center"
                  >
                    <span className=" text-4xl lg:text-5xl text-gradient2">
                      We{'’'}ve got you <br /> covered
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9 }}
                    className="flex flex-col bg-[#120F1F] w-[80%] sm:w-[500px] lg:w-[800px] px-8 py-8 rounded-xl gap-14 mt-5"
                  >
                    <motion.div
                      initial={'initial'}
                      animate={'initial'}
                      whileHover={'animate'}
                      id="faq1"
                      onClick={(e) => faqShow(e)}
                      className="flex flex-col gap-10 cursor-pointer group"
                    >
                      <div className="flex justify-between items-center ">
                        <motion.span
                          variants={arrow}
                          transition={{ ease: 'easeInOut', duration: 0.5 }}
                        >
                          What is MJ Entertainment?
                        </motion.span>
                        <motion.span
                          initial={{ rotate: 45 }} // Initial rotation
                          animate={{
                            rotate:
                              faqActive === 'What is MJ Entertainment?'
                                ? 360
                                : 45,
                          }}
                          transition={{ duration: 0.6, ease: 'linear' }}
                        >
                          <ImCross className=" group-hover:text-white" />
                        </motion.span>
                      </div>
                      {faqActive === 'What is MJ Entertainment?' ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity:
                              faqActive === 'What is MJ Entertainment?'
                                ? 100
                                : 0,
                            visibility: true,
                          }}
                          transition={{ duration: 0.5, ease: 'linear' }}
                        >
                          <span>
                            MJ Entertainment is a premier event management
                            company dedicated to curating unforgettable
                            experiences with unparalleled creativity and
                            professionalism.
                          </span>
                        </motion.div>
                      ) : null}
                    </motion.div>
                    {/* second faq */}
                    <motion.div
                      initial={'initial'}
                      animate={'initial'}
                      whileHover={'animate'}
                      id="faq1"
                      onClick={(e) => faqShow(e)}
                      className="flex flex-col gap-10 cursor-pointer group"
                    >
                      <div className="flex justify-between items-center ">
                        <motion.span
                          variants={arrow}
                          transition={{ ease: 'easeInOut', duration: 0.5 }}
                        >
                          Where are we based?
                        </motion.span>
                        <motion.span
                          initial={{ rotate: 45 }} // Initial rotation
                          animate={{
                            rotate:
                              faqActive === 'Where are we based?' ? 360 : 45,
                          }}
                          transition={{ duration: 0.6, ease: 'linear' }}
                          onClick={(e) => faqShow(e)}
                        >
                          <ImCross className=" group-hover:text-white" />
                        </motion.span>
                      </div>
                      {faqActive === 'Where are we based?' ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity:
                              faqActive === 'Where are we based?' ? 100 : 0,
                            visibility: true,
                          }}
                          transition={{ duration: 0.5, ease: 'linear' }}
                        >
                          <span>We are based in Stratford, London.</span>
                        </motion.div>
                      ) : null}
                    </motion.div>
                    {/* third faq */}
                    <motion.div
                      initial={'initial'}
                      animate={'initial'}
                      whileHover={'animate'}
                      id="faq1"
                      onClick={(e) => faqShow(e)}
                      className="flex flex-col gap-10 cursor-pointer group"
                    >
                      <div className="flex justify-between items-center ">
                        <motion.span
                          variants={arrow}
                          transition={{ ease: 'easeInOut', duration: 0.5 }}
                        >
                          What safety measures does MJ Entertainment implement
                          for events?
                        </motion.span>
                        <motion.span
                          initial={{ rotate: 45 }} // Initial rotation
                          animate={{
                            rotate:
                              faqActive ===
                              'What safety measures does MJ Entertainment implement for events?'
                                ? 360
                                : 45,
                          }}
                          transition={{ duration: 0.6, ease: 'linear' }}
                          onClick={(e) => faqShow(e)}
                        >
                          <ImCross className=" group-hover:text-white" />
                        </motion.span>
                      </div>
                      {faqActive ===
                      'What safety measures does MJ Entertainment implement for events?' ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity:
                              faqActive ===
                              'What safety measures does MJ Entertainment implement for events?'
                                ? 100
                                : 0,
                            visibility: true,
                          }}
                          transition={{ duration: 0.5, ease: 'linear' }}
                        >
                          <span>
                            Your safety is our top priority. We strictly adhere
                            to all local health and safety guidelines and take
                            necessary precautions to ensure a safe and enjoyable
                            event experience for all attendees.
                          </span>
                        </motion.div>
                      ) : null}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              <section>
                <div className="h-[70vh] lg:h-[40vh] footer-bg mx-4">
                  <div className="flex flex-col justify-center items-center text-center font-semibold">
                    <span className="text-4xl  tracking-wider text-gradient3">
                      Secure your spot and get ready now
                    </span>
                  </div>
                  <div className="flex justify-center items-center mt-20 gap-8">
                    <button className="border border-[#DAD1F1] text-[#DAD1F1] px-6 py-4 text-2xl font-semibold rounded-full border-opacity-50 hover:border-opacity-100">
                      Contact us
                    </button>
                    <Link to={'/payment'}>
                      <button className=" bg-[#DAD1F1] text-[#293BA0] px-6 py-4 text-2xl rounded-full font-semibold bg-opacity-80 hover:bg-opacity-100">
                        Get your tickets
                      </button>
                    </Link>
                  </div>
                </div>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Home;
