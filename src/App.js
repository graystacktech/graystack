import { useState } from "react";
import GlowArt from "./GlowArt";
import ReceiptHubArt from "./ReceiptHubArt";

const Logo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
      stroke="currentColor"
      {...props}
    >
      <path
        d="M11 25C10.2044 25 9.44129 24.7893 8.87868 24.4142C8.31607 24.0391 8 23.5304 8 23V19C8 18.4696 8.31607 17.9609 8.87868 17.5858C9.44129 17.2107 10.2044 17 11 17H32C32.7956 17 33.5587 17.2107 34.1213 17.5858C34.6839 17.9609 35 18.4696 35 19V23C35 23.5304 34.6839 24.0391 34.1213 24.4142C33.5587 24.7893 32.7956 25 32 25H21.5H11Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 17C3.20435 17 2.44129 16.7893 1.87868 16.4142C1.31607 16.0391 1 15.5304 1 15V11C1 10.4696 1.31607 9.96086 1.87868 9.58579C2.44129 9.21071 3.20435 9 4 9H25C25.7956 9 26.5587 9.21071 27.1213 9.58579C27.6839 9.96086 28 10.4696 28 11V15C28 15.5304 27.6839 16.0391 27.1213 16.4142C26.5587 16.7893 25.7956 17 25 17H14.5H4Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 9C10.2044 9 9.44129 8.78929 8.87868 8.41421C8.31607 8.03914 8 7.53043 8 7V3C8 2.46957 8.31607 1.96086 8.87868 1.58579C9.44129 1.21071 10.2044 1 11 1H32C32.7956 1 33.5587 1.21071 34.1213 1.58579C34.6839 1.96086 35 2.46957 35 3V7C35 7.53043 34.6839 8.03914 34.1213 8.41421C33.5587 8.78929 32.7956 9 32 9H21.5H11Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 33C10.2044 33 9.44129 32.7893 8.87868 32.4142C8.31607 32.0391 8 31.5304 8 31V27C8 26.4696 8.31607 25.9609 8.87868 25.5858C9.44129 25.2107 10.2044 25 11 25H32C32.7956 25 33.5587 25.2107 34.1213 25.5858C34.6839 25.9609 35 26.4696 35 27V31C35 31.5304 34.6839 32.0391 34.1213 32.4142C33.5587 32.7893 32.7956 33 32 33H21.5H11Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ArrowCircleRight = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const MenuIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

const XIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

const Pill = ({ name }) => {
  return (
    <span className="bg-blue-600 text-blue-50 px-4 py-1 text-xs uppercase tracking-wider font-bold rounded-full">
      {name}
    </span>
  );
};

const App = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className="font-sans">
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="flex justify-between items-center px-8 py-4">
          <div className="flex items-center font-medium md:px-20">
            <span className="flex justify-center items-center rounded-lg">
              <Logo className="w-8 h-8 lg:w-10 lg:h-10 stroke-2 text-black" />
            </span>
            <span className="ml-2 font-bold text-2xl lg:text-3xl">
              Graystack
            </span>
          </div>
          <div className="md:hidden">
            <MenuIcon
              className={`h-8 w-8 ${menuOpened ? "hidden" : "block"}`}
              onClick={toggleMenu}
            />
          </div>
          <div className="py-6 px-6 hidden md:block">
            <a
              className="px-3 text-center no-underline font-bold text-black"
              href="/"
            >
              Portfolio
            </a>
            <a
              className="px-3 text-center no-underline font-bold text-black"
              href="/"
            >
              Blog
            </a>
            <a
              className="px-3 text-center no-underline font-bold text-black"
              href="/"
            >
              Contact
            </a>
          </div>
        </div>
        <div
          className={`flex flex-col w-full bg-white ${
            menuOpened ? "absolute" : "hidden"
          }`}
        >
          <div className="flex justify-end items-end p-3">
            <XIcon
              className={`h-8 w-8 ${menuOpened ? "block" : "hidden"}`}
              onClick={toggleMenu}
            />
          </div>
          <div className="flex flex-col py-32">
            <a
              className="text-center no-underline text-lg py-1 font-bold text-black"
              href="/"
            >
              Portfolio
            </a>
            <a
              className="text-center no-underline text-lg py-1 font-bold text-black"
              href="/"
            >
              Blog
            </a>
            <a
              className="text-center no-underline text-lg py-1 font-bold text-black"
              href="/"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="py-6 flex-1 flex justify-center lg:justify-start items-center">
          <div className="flex-1 flex flex-col items-center lg:items-start px-8 lg:px-24 max-w-md lg:max-w-xl">
            <div className="text-5xl lg:text-6xl font-bold text-center lg:text-left text-black">
              We're a <span className="text-blueGray-500">minutest</span>{" "}
              company with <span className="text-blueGray-500">elegant</span>{" "}
              solutions.
            </div>
            <div className="mt-4 text-lg font-base text-center lg:text-left text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="mt-4">
              <button className="px-8 py-2 rounded-lg font-medium text-lg border-0 text-white font-sans bg-black">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-12">
        <div className="grid grid-cols-1 grid-rows-2  lg:grid-cols-4 lg:grid-rows-1 lg:gap-4">
          <div className="flex p-2 lg:p-12 lg:col-start-1 justify-end  lg:col-span-2">
            <ReceiptHubArt />
          </div>
          <div className="px-8 lg:px-0 lg:pt-16 lg:col-span-1">
            <div className="py-4 font-semibold text-xl">
              Lorem ipsum dolor sit amet
            </div>
            <div className="flex"></div>
            <div className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="my-6">
              <button className="flex justify-between items-center bg-white border-1 border-solid border-gray-300 rounded-full pl-4 py-1 font-semibold text-gray-600 text-base">
                <span className="pr-2">Learn more</span>
                <ArrowCircleRight className="w-6 h-6 text-gray-400 fill-current" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2  lg:grid-cols-4 lg:grid-rows-1 lg:gap-4">
          <div className="px-8 lg:px-0 lg:pt-16 lg:col-span-1 lg:col-start-2 justify-end">
            <div className="py-4 font-semibold text-xl">
              Lorem ipsum dolor sit amet
            </div>
            <div className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="my-6">
              <button className="flex justify-between items-center bg-white border-1 border-solid border-gray-300 rounded-full pl-4 py-1 font-semibold text-gray-600 text-base">
                <span className="pr-2">Learn more</span>
                <ArrowCircleRight className="w-6 h-6 text-gray-400 fill-current" />
              </button>
            </div>
          </div>
          <div className="flex p-2 lg:p-12 justify-start lg:col-span-2 lg:order-last order-first">
            <GlowArt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
