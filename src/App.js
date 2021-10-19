import MenuIcon from "./assets/MenuIcon";

const NavBar = () => {
  return (
    <>
      <nav className="p-6 hidden sm:block">
        <span className="mr-8">
          <a
            className="no-underline text-black font-semibold border-solid border-0 border-b-2 border-transparent hover:border-current"
            href="/"
          >
            Works
          </a>
        </span>
        <span className="mr-8">
          <a
            className="no-underline text-black font-semibold border-solid border-0 border-b-2 border-transparent hover:border-current"
            href="/"
          >
            Blog
          </a>
        </span>
        <span className="mr-8">
          <a
            className="no-underline text-black font-semibold border-solid border-0 border-b-2 border-transparent hover:border-current"
            href="/"
          >
            Contact
          </a>
        </span>
      </nav>
      <div className="sm:hidden p-6">
        <MenuIcon />
      </div>
    </>
  );
};

const Header = () => {
  return (
    <header className="flex justify-end">
      <NavBar />
    </header>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <main className="flex mx-40 pt-40">
        <div className="flex-1">
          <div className="py-6">
            <div className="text-4xl font-bold py-1 text-center sm:text-left">
              Hi, We are{" "}
              <span className="border-solid border-0 border-b-4">
                Graystack
              </span>
              ,
            </div>
            <div className="text-4xl font-bold py-1 text-center sm:text-left">
              And some other awesome shit.
            </div>
          </div>
          <div className="text-lg text-center sm:text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do sint.
            officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </div>
          <div className="py-7 flex justify-center sm:justify-start">
            <button className="bg-black text-white text-semibold py-1 px-4 text-lg focus:outline-none border-none">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex-1 hidden lg:block"></div>
      </main>
    </>
  );
};

export default App;
