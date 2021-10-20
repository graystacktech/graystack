import FacebookIcon from "./assets/FacebookIcon";
import LinkedInIcon from "./assets/LinkedInIcon";
import MenuIcon from "./assets/MenuIcon";
import TwitterIcon from "./assets/TwitterIcon";

const NavBar = () => {
  return (
    <>
      <nav className="p-6 hidden sm:block">
        <span className="mr-8">
          <a
            className="no-underline text-white text-lg font-semibold border-solid border-0 border-b-2 border-transparent hover:border-current"
            href="/"
          >
            Works
          </a>
        </span>
        <span className="mr-8">
          <a
            className="no-underline text-white text-lg font-semibold border-solid border-0 border-b-2 border-transparent hover:border-current"
            href="/"
          >
            Blog
          </a>
        </span>
        <span className="mr-8">
          <a
            className="no-underline text-white text-lg font-semibold border-solid border-0 border-b-2 border-transparent hover:border-current"
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
    <header className="flex justify-between bg-black items-center">
      <div className="text-white mx-10 my-6 flex items-center border-2 border-white border-solid">
        <div className="bg-white pl-1">
          <span className="text-2xl font-bold text-gray-900">Gray</span>
        </div>
        <div className="pr-1 pl-1">
          <span className="text-2xl font-bold text-text">stack</span>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

const FeaturedWork = () => {
  return (
    <div className="py-12 flex">
      <div className="w-56 h-56 bg-gray-200 rounded-lg flex-shrink-0" />
      <div className="px-16">
        <div className="text-lg font-semibold">Lorem ipsum dolor sit amet</div>
        <div className="pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          dapibus malesuada magna vitae viverra. Morbi eget blandit dui. Nullam
          non lectus est. Cras urna nulla, cursus id sapien a, dictum aliquam
          leo. Fusce at leo non metus luctus aliquam ac at risus. Mauris ut
          lacus faucibus, malesuada metus eu, pulvinar ligula. Duis volutpat a
          tellus a vestibulum. Nullam id turpis non risus efficitur feugiat quis
          sit amet turpis. Donec ac felis accumsan libero euismod mattis a at
          sem. Cras aliquam dui vehicula diam porta, ut aliquam purus commodo.
          Fusce maximus rutrum lorem pulvinar vestibulum.
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <div className="flex px-40 pt-36 pb-12 bg-black">
        <div className="flex-1">
          <div className="py-6">
            <div className="text-4xl font-bold py-1 text-center sm:text-left text-white">
              Hi, We are{" "}
              <span className="border-solid border-0 border-b-4">
                Graystack
              </span>
              ,
            </div>
            <div className="text-4xl font-bold py-1 text-center sm:text-left text-white">
              And some other awesome shit.
            </div>
          </div>
          <div className="text-xl text-center sm:text-left text-white">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do sint.
            officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </div>
          <div className="py-7 flex justify-center sm:justify-start">
            <button className="bg-white text-black text-semibold py-1 px-4 text-lg focus:outline-none border-none">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex-1 hidden lg:block"></div>
      </div>
      <div className=" h-screen px-40 py-12">
        <div>
          <span className="text-xl font-bold border-solid border-0 border-b-4">
            Featured Works
          </span>
        </div>
        <div>
          <FeaturedWork />
          <FeaturedWork />
        </div>
      </div>
      <div className="h-1 border-solid border-0 border-b border-gray-400" />
      <div>
        <div className="flex justify-center py-20">
          <div className="px-3">
            <FacebookIcon />
          </div>
          <div className="px-3">
            <TwitterIcon />
          </div>
          <div className="px-3">
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
