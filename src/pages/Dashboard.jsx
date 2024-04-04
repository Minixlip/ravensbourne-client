import { useState, useEffect, useRef } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import Header from '../components/Header';
import { useUpdateTicket } from '../hooks/useUpdateTicket';
import { baseUrl } from '../../Urls';

import {
  FaLocationDot,
  FaUnlockKeyhole,
  FaTicket,
  FaMessage,
} from 'react-icons/fa6';
import { MdContacts, MdContactless, MdEmail } from 'react-icons/md';
import { IoWarning } from 'react-icons/io5';

import { FaUserCircle } from 'react-icons/fa';

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const { user } = useAuthContext();
  const [twoFactor, setTwoFactor] = useState(false);
  const [newUserId, setNewUserId] = useState(``);
  const [firstGuestName, setFirstGuestName] = useState('');
  const [secondGuestName, setSecondGuestName] = useState('');
  const [updateData, setUpdateData] = useState({
    firstGuestName: '',
    secondGuestName: '',
    ticketId: '',
  });

  const { UpdateTicket, isLoading, error, updatedTicket } = useUpdateTicket();

  const [compareUserId, setCompareUserId] = useState('');

  const fetchProfile = async () => {
    if (!user) {
      return;
    }
    const userid = user.userid;

    const response = await fetch(
      `${baseUrl}/api/dashboard/profile/${userid}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();

    console.log(json);
    if (json) {
      setProfile(json);
      setUpdateData({
        ...updateData,
        firstGuestName: json.ticket.firstGuestName,
        secondGuestName: json.ticket.secondGuestName,
      });
      setFirstGuestName(json.ticket.firstGuestName);
      setSecondGuestName(json.ticket.secondGuestName);
    }
    setNewUserId(user.userid);
    setCompareUserId(user.userid);
  };

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  // Create a ref for the card you want to scroll to
  const userRef = useRef(null);
  const personalRef = useRef(null);
  const contactRef = useRef(null);
  const locationRef = useRef(null);
  const ticketRef = useRef(null);
  const communicationRef = useRef(null);
  const authenticationRef = useRef(null);

  // Event handler for the button click
  const scrollToCard = (ref) => {
    // Scroll to the top of the card

    if (ref === userRef) {
      userRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (ref === personalRef) {
      personalRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    if (ref === contactRef) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (ref === locationRef) {
      locationRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    if (ref === ticketRef) {
      ticketRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (ref === authenticationRef) {
      authenticationRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    if (ref === communicationRef) {
      communicationRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const HandleChange = (e) => {
    e.preventDefault();

    const { value, id } = e.target;

    if (id.includes('firstGuestName')) {
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (nameRegex.test(value) || value === '') {
        setUpdateData({ ...updateData, [id]: value.toUpperCase() });
      }
      return;
    }
    if (id.includes('secondGuestName')) {
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (nameRegex.test(value) || value === '') {
        setUpdateData({ ...updateData, [id]: value.toUpperCase() });
      }
      return;
    }

    console.log(updateData);
  };

  const HandleSubmitGuest = async (updateData) => {
    await UpdateTicket({ ...updateData, _Id: profile.ticket._id });

    if (!error) {
      fetchProfile();
    }
  };

  return (
    <section className="relative">
      <div className="absolute w-full">
        <Header />
      </div>

      <div className="dashboard-bg h-screen pt-16">
        <div className="flex h-full justify-center sm:justify-normal ">
          <div className="hidden xl:flex left-side ">
            <div className="flex flex-col items-center h-full pl-44 pr-12 pt-36">
              <div className="flex flex-col justify-start items-start tracking-wider">
                <span className="text-primaryTxt font-bold text-4xl ">
                  Account <br /> Management
                </span>
                <div className="mt-20 ml-3">
                  <ul className="flex flex-col gap-7 text-lg font-bold text-primaryTxt">
                    <li
                      onClick={() => scrollToCard(userRef)}
                      className="flex items-center gap-6 justify-start cursor-pointer group"
                    >
                      <FaUserCircle
                        size={'28px'}
                        className="group-hover:text-red-500"
                      />
                      USER ID
                    </li>
                    <li
                      onClick={() => scrollToCard(personalRef)}
                      className="flex items-center gap-6 justify-start cursor-pointer group"
                    >
                      <MdContacts
                        size={'28px'}
                        className="group-hover:text-red-500"
                      />
                      PERSONAL INFORMATION
                    </li>
                    <li
                      onClick={() => scrollToCard(contactRef)}
                      className="flex items-center gap-6 justify-start cursor-pointer group"
                    >
                      <MdContactless
                        size={'28px'}
                        className="group-hover:text-red-500"
                      />
                      CONTACT DETAILS
                    </li>
                    <li
                      onClick={() => scrollToCard(locationRef)}
                      className="flex items-center gap-6 justify-start cursor-pointer group"
                    >
                      <FaLocationDot
                        size={'28px'}
                        className="group-hover:text-red-500"
                      />
                      LOCATION
                    </li>
                    <li
                      onClick={() => scrollToCard(ticketRef)}
                      className="flex items-center gap-6 justify-start cursor-pointer group"
                    >
                      <FaTicket
                        size={'28px'}
                        className="group-hover:text-red-500"
                      />
                      TICKETS
                    </li>
                    <li
                      onClick={() => scrollToCard(authenticationRef)}
                      className="flex items-center gap-6 justify-start cursor-pointer group"
                    >
                      <span className="group-hover:text-red-500">
                        <FaUnlockKeyhole
                          size={'28px'}
                          className="group"
                        />
                      </span>
                      TWO-FACTOR AUTHENTICATION
                    </li>
                    <li
                      onClick={() => scrollToCard(communicationRef)}
                      className="flex items-center gap-6 justify-start cursor-pointer group"
                    >
                      <FaMessage
                        size={'28px'}
                        className="group-hover:text-red-500"
                      />
                      COMMUNICATION PREFERENCES
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center pt-5 xl:px-10 ">
            <div className="card-containers flex flex-col gap-6 pl-2 pb-2 mr-2 overflow-scroll overflow-x-hidden no-scrollbar">
              {/* user information */}
              <div
                ref={userRef}
                className="card flex flex-col sm:flex-row"
              >
                <div className=" bg-secondaryCardBg flex flex-col flex-1 max-w-[290px] lg:max-w-[350px] px-10 pt-10 pb-10 lg:rounded-l-md">
                  <span className="text-primaryTxt font-bold text-2xl">
                    User ID
                  </span>
                  <div className="flex flex-col mt-6  text-secondaryTxt text-sm lg:text-base">
                    <span className=" font-semibold ">
                      Your Mojo ID is used by users to find you through the
                      future social panel.
                    </span>
                    <div className="mt-10 sm:mt-20 flex items-center flex-row gap-4">
                      <div className="border-2 rounded-full p-1 border-purple-600 text-purple-600">
                        <IoWarning />
                      </div>

                      <span className="font-bold">
                        MOJO ID CANNOT BE CHANGED
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" bg-primaryCardBg flex flex-col justify-between flex-1 max-w-[290px] sm:min-w-[450px] sm:max-w-[450px] px-10 pt-10 pb-10 lg:rounded-r-md ">
                  <div className="flex flex-col">
                    <span className="text-primaryTxt font-bold text-2xl">
                      User ID
                    </span>
                    <input
                      className="mt-6 text-primaryTxt input-dashboard "
                      value={newUserId}
                      onChange={(e) => setNewUserId(e.target.value)}
                    />
                  </div>

                  <div className=" mt-10 flex gap-2">
                    <button
                      onClick={() => setNewUserId(compareUserId)}
                      className="btn-dashboard bg-neutral-700 text-primaryTxt font-bold px-2 py-1 rounded-md hover:bg-neutral-600 text-base"
                    >
                      Cancel
                    </button>
                    <button
                      disabled={
                        newUserId === compareUserId ? true : false || isLoading
                      }
                      className={
                        newUserId === compareUserId
                          ? 'text-primaryTxt font-bold px-2 py-1 rounded-md text-base bg-primaryCardBg'
                          : 'bg-red-600 text-primaryTxt font-bold px-2 py-1 rounded-md  text-base'
                      }
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
              {/* personal Information */}
              <div
                ref={personalRef}
                className="card flex flex-col sm:flex-row"
              >
                <div className=" bg-secondaryCardBg flex flex-col flex-1 max-w-[290px] lg:min-w-[350px] lg:max-w-[350px] px-10 pt-10 pb-10 lg:rounded-l-md">
                  <span className="text-primaryTxt font-bold text-2xl">
                    Personal Information
                  </span>
                  <div className="flex flex-col mt-6  text-secondaryTxt text-sm lg:text-base">
                    <span className=" font-semibold ">
                      This information is private and will not be shared with
                      none other. Read the{' '}
                      <a
                        href="#"
                        className="text-red-500"
                      >
                        Mojo Privacy
                      </a>{' '}
                      Notice anytime!
                    </span>
                  </div>
                </div>
                <div className=" bg-primaryCardBg flex flex-col justify-between flex-1 max-w-[290px] sm:min-w-[450px] sm:max-w-[450px] px-10 pt-10 pb-10 lg:rounded-r-md ">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <span className="text-primaryTxt font-bold text-2xl">
                        Full name
                      </span>
                      {profile && (
                        <span className="font-bold">
                          {profile.user.firstName.charAt(0)}
                          {profile.user.firstName.slice(1).toLowerCase()}{' '}
                          {profile.user.surName.charAt(0)}
                          {profile.user.surName.slice(1).toLowerCase()}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-primaryTxt font-bold text-2xl">
                        Gender
                      </span>
                      {profile && (
                        <span className="font-bold">
                          {profile.user.gender.charAt(0)}
                          {profile.user.gender.slice(1).toLowerCase()}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-primaryTxt font-bold text-2xl">
                        DOB
                      </span>
                      {profile && (
                        <span className="font-bold">
                          {profile.user.dateOfBirthDay}{' '}
                          {profile.user.dateOfBirthMonth}{' '}
                          {profile.user.dateOfBirthYear}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-primaryTxt font-bold text-2xl">
                        Graduation year
                      </span>
                      {profile && (
                        <span className="font-bold">
                          {profile.user.graduationYear}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* contact details */}
              <div
                ref={contactRef}
                className="card flex flex-col sm:flex-row"
              >
                <div className=" bg-secondaryCardBg flex flex-col flex-1 lg:min-w-[350px] max-w-[290px] lg:max-w-[350px] px-10 pt-10 pb-10 lg:rounded-l-md">
                  <span className="text-primaryTxt font-bold text-2xl">
                    Contact Details
                  </span>
                  <div className="flex flex-col mt-6  text-secondaryTxt text-sm lg:text-base">
                    <span className=" font-semibold ">
                      This information is private and will not be shared with
                      none other. Read the{' '}
                      <a
                        href="#"
                        className="text-red-500"
                      >
                        Mojo Privacy
                      </a>{' '}
                      Notice anytime!
                    </span>
                  </div>
                </div>
                <div className=" bg-primaryCardBg flex flex-col justify-between flex-1  max-w-[290px] sm:min-w-[450px] sm:max-w-[450px] px-10 pt-10 pb-10 lg:rounded-r-md">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <span className="text-primaryTxt font-bold text-2xl">
                        Email address
                      </span>
                      {profile && (
                        <span className="text-[12px] sm:text-base font-bold">
                          {profile.user.emailAddress.toLowerCase()}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-primaryTxt font-bold text-2xl">
                        Phone number
                      </span>
                      {profile && (
                        <span className="text-[12px] sm:text-base font-bold">
                          {profile.user.phoneNumber}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Location */}
              <div
                ref={locationRef}
                className="card flex flex-col sm:flex-row"
              >
                <div className=" bg-secondaryCardBg flex flex-col flex-1 lg:min-w-[350px] max-w-[290px] lg:max-w-[350px] px-10 pt-10 pb-10 lg:rounded-l-md">
                  <span className="text-primaryTxt font-bold text-2xl">
                    Location
                  </span>
                  <div className="flex flex-col mt-6  text-secondaryTxt text-sm lg:text-base">
                    <span className=" font-semibold ">
                      This information is private and will not be shared with
                      none other. Read the{' '}
                      <a
                        href="#"
                        className="text-red-500"
                      >
                        Mojo Privacy
                      </a>{' '}
                      Notice anytime!
                    </span>
                  </div>
                </div>
                <div className=" bg-primaryCardBg flex flex-col justify-between flex-1  max-w-[290px] sm:min-w-[450px] sm:max-w-[450px] px-10 pt-10 pb-10 lg:rounded-r-md">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <span className="text-primaryTxt font-bold text-2xl">
                        Street name
                      </span>
                      {profile && (
                        <span className="font-bold">
                          {profile.user.streetName}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-primaryTxt font-bold text-2xl">
                        Post Code
                      </span>
                      {profile && (
                        <span className="font-bold">
                          {profile.user.postCode}{' '}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-primaryTxt font-bold text-2xl">
                        City
                      </span>
                      {profile && (
                        <span className="font-bold">{profile.user.city}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Tickets */}
              <div
                ref={ticketRef}
                className="card flex flex-col sm:flex-row"
              >
                <div className=" bg-secondaryCardBg flex flex-col flex-1 min-w-[290px] max-w-[290px] lg:max-w-[350px] px-10 pt-10 pb-10 lg:rounded-l-md">
                  <span className="text-primaryTxt font-bold text-2xl">
                    Ticket Details
                  </span>
                  <div className="flex flex-col mt-6  text-secondaryTxt text-sm lg:text-base">
                    <span className=" font-semibold ">
                      View your tickets and all your information here.
                    </span>
                  </div>
                </div>
                <div className=" bg-primaryCardBg flex flex-col justify-between flex-1 max-w-[290px] sm:min-w-[450px] sm:max-w-[450px] px-10 pt-10 pb-10 lg:rounded-r-md">
                  <div className="flex flex-col gap-2">
                    {profile && profile.ticket && profile.ticket.firstName ? (
                      <div>
                        <div className="flex flex-col">
                          <span className="text-primaryTxt font-bold text-2xl">
                            Event
                          </span>
                          {profile && profile.ticket.event && (
                            <span className="text-[12px] sm:text-base">
                              {profile.ticket.event.charAt(0)}
                              {profile.ticket.event.slice(1).toLowerCase()}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-primaryTxt font-bold text-2xl">
                            Ticket holder
                          </span>
                          {profile && profile.ticket.firstName && (
                            <span className="text-[12px] sm:text-base">
                              {profile.ticket.firstName.charAt(0)}
                              {profile.ticket.firstName
                                .slice(1)
                                .toLowerCase()}{' '}
                              {profile.ticket.surName.charAt(0)}
                              {profile.ticket.surName.slice(1).toLowerCase()}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-primaryTxt font-bold text-2xl">
                            Guest count
                          </span>
                          {profile && <span>{profile.ticket.guestCount}</span>}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-primaryTxt font-bold text-2xl">
                            Price
                          </span>
                          {profile && (
                            <span>£{profile.ticket.totalPrice} </span>
                          )}
                        </div>
                      </div>
                    ) : (
                      <span className="text-white font-semibold">
                        No tickets
                      </span>
                    )}
                    {profile && profile.ticket.firstGuestName && (
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="firstGuestName"
                          className="text-primaryTxt font-bold text-2xl"
                        >
                          First guest
                        </label>
                        {profile && (
                          <input
                            className="input-guest-dashboard"
                            id="firstGuestName"
                            name="firstGuestName"
                            value={updateData.firstGuestName}
                            onChange={(e) => HandleChange(e)}
                            maxLength={30}
                          />
                        )}
                        <div className="mt-4 flex gap-2 justify-end">
                          <button
                            onClick={() =>
                              setUpdateData({
                                ...updateData,
                                firstGuestName: firstGuestName,
                              })
                            }
                            className="btn-dashboard bg-neutral-700 text-primaryTxt font-bold px-2 py-1 rounded-md hover:bg-neutral-600 text-base"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => HandleSubmitGuest(updateData)}
                            disabled={
                              updateData.firstGuestName === firstGuestName
                                ? true
                                : false || isLoading
                            }
                            className={
                              updateData.firstGuestName === firstGuestName
                                ? 'text-primaryTxt font-bold px-2 py-1 rounded-md text-base bg-primaryCardBg'
                                : 'bg-red-600 text-primaryTxt font-bold px-2 py-1 rounded-md  text-base'
                            }
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    )}
                    {profile && profile.ticket.secondGuestName && (
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="secondGuestName"
                          className="text-primaryTxt font-bold text-2xl"
                        >
                          Second guest
                        </label>
                        {profile && (
                          <input
                            className="input-guest-dashboard"
                            id="secondGuestName"
                            name="secondGuestName"
                            value={updateData.secondGuestName}
                            onChange={(e) => HandleChange(e)}
                            maxLength={30}
                          />
                        )}
                        <div className="mt-4 flex gap-2 justify-end">
                          <button
                            onClick={() =>
                              setUpdateData({
                                ...updateData,
                                secondGuestName: secondGuestName,
                              })
                            }
                            className="btn-dashboard bg-neutral-700 text-primaryTxt font-bold px-2 py-1 rounded-md hover:bg-neutral-600 text-base"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => HandleSubmitGuest(updateData)}
                            disabled={
                              updateData.secondGuestName === secondGuestName
                                ? true
                                : false || isLoading
                            }
                            className={
                              updateData.secondGuestName === secondGuestName
                                ? 'text-primaryTxt font-bold px-2 py-1 rounded-md text-base bg-primaryCardBg'
                                : 'bg-red-600 text-primaryTxt font-bold px-2 py-1 rounded-md  text-base'
                            }
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* two factor authentication */}
              <div
                ref={authenticationRef}
                className="card flex flex-col sm:flex-row"
              >
                <div className=" bg-secondaryCardBg flex flex-col flex-1 lg:min-w-[350px] max-w-[290px] lg:max-w-[350px] px-10 pt-10 pb-10 lg:rounded-l-md">
                  <span className="text-primaryTxt font-bold text-2xl">
                    Two-Factor Authentication
                  </span>
                  <div className="flex flex-col mt-6  text-secondaryTxt text-sm lg:text-base">
                    <span className=" font-semibold ">
                      Protect your account from unauthorized access by requiring
                      a secure code when signing in. Have questions? Learn more
                      about{' '}
                      <a
                        href="#"
                        className="text-red-500 underline"
                      >
                        two-factor authentication.
                      </a>{' '}
                    </span>
                  </div>
                </div>
                <div className=" bg-primaryCardBg flex flex-col justify-between flex-1  max-w-[290px] sm:min-w-[450px] sm:max-w-[450px] px-10 pt-10 pb-10 lg:rounded-r-md">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between font-bold px-2 py-2 bg-stone-800 flex-col sm:flex-row gap-4">
                      <div className=" flex items-center gap-4 ">
                        <div
                          className={
                            twoFactor
                              ? 'text-red-500 bg-neutral-100 rounded-full p-3'
                              : ' text-neutral-700 bg-neutral-100 rounded-full p-3'
                          }
                        >
                          <MdEmail size={'20px'} />
                        </div>

                        <div className="flex flex-col">
                          <span className="text-white tracking-wider">
                            Email
                          </span>
                          <span
                            className={
                              twoFactor
                                ? 'leading-6 tracking-wide text-red-500 '
                                : 'leading-6 tracking-wide '
                            }
                          >
                            {twoFactor ? 'ENABLED' : 'DISABLED'}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setTwoFactor((prevState) => !prevState)}
                        className="bg-neutral-200 tracking-wider text-primaryCardBg px-7 rounded-md hover:bg-neutral-100"
                      >
                        {twoFactor ? 'DISABLE' : 'ENABLE'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* communication preferences */}
              <div
                ref={communicationRef}
                className="card flex flex-col sm:flex-row"
              >
                <div className=" bg-secondaryCardBg flex flex-col flex-1 lg:min-w-[350px] max-w-[290px] lg:max-w-[350px] px-10 pt-10 pb-10 lg:rounded-l-md">
                  <span className="text-primaryTxt font-bold text-2xl">
                    Communication Preferences
                  </span>
                </div>

                <div className=" bg-primaryCardBg flex flex-col justify-between flex-1  max-w-[290px] sm:min-w-[450px] sm:max-w-[450px] px-10 pt-10 pb-10 lg:rounded-r-md">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        className="h-5 w-5 rounded-full border checkbox"
                      />
                      <span className="text-primaryTxt font-bold tracking-wider text-xl">
                        Communication from Mojo
                      </span>
                    </div>
                    <span>
                      Yes, Mojo may use and share my email to enable
                      personalized advertising with third parties (e.g. Google,
                      Twitch) and to send me info about new releases, game
                      updates, events, or other Mojo-related content.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
