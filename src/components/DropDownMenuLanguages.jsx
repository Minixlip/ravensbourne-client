import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { PiGlobeLight } from 'react-icons/pi';
import { TiTick } from 'react-icons/ti';

import { motion } from 'framer-motion';

export default function LanguageMenuHeader() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [languages, setLanguages] = useState([
    {
      name: 'ENGLISH',
      country: 'UK',
      active: true,
    },
    {
      name: 'DEUTSCH',
      country: 'GER',
      active: false,
    },
    {
      name: 'ESPAÑOL',
      country: 'ESP',
      active: false,
    },
    {
      name: 'FRANÇIAS',
      country: 'FR',
      active: false,
    },
    {
      name: 'ITALIANO',
      country: 'IT',
      active: false,
    },
    {
      name: 'PORTUGUÊS',
      country: 'PT',
      active: false,
    },
    {
      name: '中文',
      country: 'CN',
      active: false,
    },
    {
      name: 'Русский',
      country: 'RU',
      active: false,
    },
    {
      name: '한국어',
      country: 'KR',
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
    e.preventDefault();

    const updatedLanguages = languages.map((lang) => ({
      ...lang,
      active: lang === clickedLanguage,
    }));
    setLanguages(updatedLanguages);

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
            <Menu.Button className="inline-flex w-full justify-center px-4 py-1 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
              <span
                className="flex items-end gap-2 mr-2  py-1 px-6 rounded-lg text-primaryTxt hover:bg-zinc-800 text-base"
                aria-hidden="true"
              >
                <motion.div
                  animate={{ rotate: menuVisible ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <PiGlobeLight
                    size={'20px'}
                    color="white"
                  />
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
              <Menu.Items className="absolute z-50 right-0 mt-2 w-56 px-4 pb-2 origin-top-right rounded-sm bg-white  shadow-lg ring-1 ring-black/5 focus:outline-none border-t-4 border-red-600">
                <div className="px-1 py-1 overflow-scroll h-[300px] no-scrollbar">
                  <div className="flex flex-col pb-4 pt-2">
                    <span className="text-primaryBtn">Change Language</span>
                  </div>
                  <hr className="pb-4" />
                  {languages.map((language) => (
                    <div key={language.country}>
                      <Menu.Item>
                        <Link to={'/Dashboard'}>
                          <button
                            disabled={language.active}
                            onClick={(e) => handleLanguageClick(language, e)}
                            className={`${
                              language.active
                                ? ' text-red-600'
                                : 'text-primaryBtn hover:bg-zinc-300'
                            } group flex justify-between w-full items-center rounded-md px-2 py-2 mb-2 text-sm`}
                          >
                            {language.name + ' (' + language.country + ')'}
                            {language.active && <TiTick size={'20px'} />}
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
