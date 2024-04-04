import { useState } from 'react';
import Header from '../components/Header';
import { FaChevronRight } from 'react-icons/fa';
import { useLogin } from '../hooks/UseLogin';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import ErrorPopUp from '../components/ErrorPopUp';

const SignIn = () => {
  const [data, setData] = useState({
    emailAddress: '',
    password: '',
  });
  const { login, error, isLoading } = useLogin();

  const HandleOnChange = (event) => {
    event.preventDefault();

    setData({ ...data, [event.target.name]: event.target.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    console.log(data);

    await login(data);

    const success = localStorage.getItem('user');

    if (success) {
      window.location.href = '/';
    }
  };

  return (
    <section className="relative">
      <div className="absolute w-full ">
        <Header />
      </div>
      <div className=" dashboard-bg">
        <div className="flex h-screen lg:flex-row justify-center items-center">
          <div className="flex flex-col items-center bg-white rounded-md sign-form px-1 sm:px-10 py-12">
            <form
              className="flex flex-col gap-y-4 "
              onSubmit={HandleSubmit}
            >
              <div className="mt-5  flex flex-col gap-y-4">
                <label
                  name="emailAddress"
                  htmlFor="emailAddress"
                  className="hidden sr-only"
                >
                  {' '}
                  Email ID
                </label>
                <input
                  className="text-black font-bold tracking-wider sign-input"
                  type="text"
                  placeholder="Email"
                  required
                  id="emailAddress"
                  name="emailAddress"
                  onChange={HandleOnChange}
                  value={data.emailAddress}
                />
              </div>
              <div className="mt-5 flex flex-col gap-y-4">
                <label
                  className="hidden sr-only"
                  name="password"
                  htmlFor="password"
                  aria-label="password"
                >
                  Password
                </label>
                <input
                  className="text-black font-bold tracking-wider sign-input"
                  type="password"
                  placeholder="Password"
                  required
                  id="password"
                  name="password"
                  onChange={HandleOnChange}
                  value={data.password}
                />
              </div>

              <div className="flex justify-between mx-4 mt-2 gap-2">
                <div className="bg-blue-500 hover:bg-blue-600 cursor-pointer  flex-1 flex items-center justify-center py-3 px-6 rounded-full">
                  <FaFacebook color="white" />
                </div>
                <div className="bg-gray-200 hover:bg-gray-300 cursor-pointer flex-1 flex items-center justify-center py-3 px-6 rounded-full">
                  <FcGoogle />
                </div>
                <div className="bg-black hover:bg-gray-900 cursor-pointer flex-1 flex items-center justify-center py-3 px-6 rounded-full">
                  <FaApple color="white" />
                </div>
                <div className="bg-slate-100 hover:bg-slate-200 cursor-pointer flex-1 flex items-center justify-center py-3 px-6 rounded-full">
                  <FaSquareXTwitter color="black" />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  disabled={isLoading}
                  className="flex justify-center btn2 mt-4 hover:gap-4 transition-all ease-in-out duration-300"
                >
                  Log in
                  <FaChevronRight
                    size={'11px'}
                    color="#70757E"
                  />
                </button>
              </div>

              {error && <ErrorPopUp error={error} />}
            </form>
            <div className="flex flex-col mt-6 items-center">
              <span className=" text-secondaryTxt font-semibold">{`Don't have an account?`}</span>
              <a
                href="/Register"
                className="text-secondaryTxt font-semibold hover:text-black transition-all ease-in-out duration-300"
              >
                Register here
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
