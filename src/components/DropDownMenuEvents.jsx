import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoTriangleDown } from 'react-icons/go';

import { TiTick } from 'react-icons/ti';

import { motion } from 'framer-motion';

export default function EventsMenuHeader() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [eventTitles, setEventTitles] = useState([
    {
      name: 'All',
      link: '/',
      active: false,
    },
    {
      name: 'Conferences',
      link: '/',
      active: false,
    },
    {
      name: 'Workshops',
      link: '/',
      active: false,
    },
    {
      name: 'Webinars',
      link: '/',
      active: false,
    },
    {
      name: 'Music Festivals',
      link: '/',
      active: false,
    },
    {
      name: 'Exhibitions',
      link: '/',
      active: false,
    },
    {
      name: 'Networking Events',
      link: '/',
      active: false,
    },
    {
      name: 'Sporting Events',
      link: '/',
      active: false,
    },
    {
      name: 'Community Events/Fairs',
      link: '/',
      active: false,
    },
    {
      name: 'Cultural Festivals',
      link: '/',
      active: false,
    },
    {
      name: 'Food and Drink Events',
      link: '/',
      active: false,
    },
    {
      name: 'Educational Events',
      link: '/',
      active: false,
    },
    {
      name: 'Performing Arts',
      link: '/',
      active: false,
    },
    {
      name: 'Religious Events',
      link: '/',
      active: false,
    },
    {
      name: 'Charity Events',
      link: '/',
      active: false,
    },
  ]);

  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setMenuVisible(false);
  };

  const handleLanguageClick = (clickedLanguage, e) => {
    const updatedLanguages = eventTitles.map((lang) => ({
      ...lang,
      active: lang === clickedLanguage,
    }));
    setEventTitles(updatedLanguages);

    console.log(e);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Menu
        as="div"
        className="relative inline-block text-left"
      >
        <div>
          <div>
            <Menu.Button className="inline-flex w-full justify-center text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
              <span
                className="flex items-end gap-2  rounded-lg text-primaryTxt  text-base"
                aria-hidden="true"
              >
                All Events
                <motion.div
                  animate={{ rotate: menuVisible ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <GoTriangleDown className="text-zinc-400" />
                </motion.div>
              </span>
            </Menu.Button>
          </div>

          <div>
            <Transition
              as={Fragment}
              show={menuVisible}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-50 left-0 mt-2 w-56 px-4 py-2 origin-top-right rounded-sm bg-zinc-800 shadow-lg ring-1 ring-black/5 focus:outline-none border-t-4 border-red-600">
                <div className="px-1 py-1 overflow-scroll h-[300px] no-scrollbar">
                  {eventTitles.map((event) => (
                    <div key={event.name}>
                      <Menu.Item>
                        <Link to={event.link}>
                          <button
                            disabled={event.active}
                            onClick={(e) => handleLanguageClick(event, e)}
                            className={`${
                              event.active
                                ? ' text-red-600'
                                : 'text-primaryTxt hover:bg-zinc-600'
                            } group flex justify-between w-full items-center rounded-md px-2 py-2 mb-2 text-sm`}
                          >
                            {event.name}
                          </button>
                        </Link>
                      </Menu.Item>
                    </div>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </div>
        </div>
      </Menu>
    </div>
  );
}
