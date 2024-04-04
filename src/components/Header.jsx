import Logo from '../assets/diamond-logo.svg';
import UserMenuHeader from './DropDownMenuProfile';
import LanguageMenuHeader from './DropDownMenuLanguages';
import EventsMenuHeader from './DropDownMenuEvents';
import { GoArrowUpRight } from 'react-icons/go';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const HandleClick = () => {
    logout();
  };

  const [logoHover, setLogoHover] = useState(false);
  return (
    <header className=" px-2 py-2 bg-[#111111] shadow-black shadow border-b-2  border-b-zinc-700 border-opacity-50">
      <div className="flex ">
        <div className="flex flex-1 pl-5 items-center text-nowrap ">
          <motion.div
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
          >
            <a
              href="/"
              className=" flex items-center gap-2 font-bold text-white "
            >
              MJ
              <motion.div
                animate={{ rotate: logoHover ? 360 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={Logo}
                  className="h-[30px] min-w-[30px] cursor-pointer bg-white px-2 py-2 rounded-full"
                />
              </motion.div>
            </a>
          </motion.div>

          <div className="hidden xl:flex items-center  pl-10 gap-10">
            <div className=" border-b-4 border-b-transparent">
              <EventsMenuHeader />
            </div>

            <div className="flex items-center justify-center text-center">
              <a className=" w-26 flex items-center gap-1 text-secondaryTxt py-4 font-bold cursor-pointer border-b-4 border-b-transparent hover:border-b-red-600">
                New Events
                <GoArrowUpRight />
              </a>
            </div>

            <div className="flex items-center justify-center text-center">
              <a className=" w-26  flex items-center gap-1 text-secondaryTxt py-4 font-bold cursor-pointer border-b-4 border-b-transparent hover:border-b-red-600">
                Past Events
                <GoArrowUpRight />
              </a>
            </div>
            <div className=" w-26 border-b-4 border-b-transparent hover:border-b-red-600 flex items-center justify-center text-center">
              <a className="flex items-center gap-1 text-secondaryTxt py-4 font-bold cursor-pointer ">
                Contact Us
                <GoArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        <div className="sm:flex-1  flex items-center  justify-end ">
          <div className="hidden sm:inline-flex">
            <LanguageMenuHeader />
          </div>

          {user ? (
            <UserMenuHeader
              username={user.firstName}
              surname={user.surName}
              id={user.userid}
              HandleLogOut={HandleClick}
            />
          ) : (
            <div className="flex ">
              <Link to={'/SignIn'}>
                <button className=" flex justify-center items-end text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75  mr-4 py-2 px-2 lg:px-6 rounded-lg text-primaryTxt bg-zinc-800 text-nowrap">
                  Sign In
                </button>
              </Link>
              <Link to={'/Register'}>
                <button className=" flex justify-center items-end text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75  mr-4 py-2 px-2 lg:px-6 rounded-lg text-primaryTxt bg-zinc-800 text-nowrap">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
