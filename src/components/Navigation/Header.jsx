import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <header className="w-full p-4 bg-cyan-300">
      <nav className="flex items-center justify-evenly">
        <div className="items-center hidden gap-x-2 sm:flex">
          <a
            href="/"
            className="p-2 transition duration-150 ease-in-out border-2 border-gray-600 rounded-full bg-cyan-200 hover:-translate-y-1 hover:scale-110"
          >
            <svg
              className="stroke-2 stroke-gray-600 fill-none"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1.6rem"
              width="1.6rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="/"
            className="p-2 transition duration-150 ease-in-out border-2 border-gray-600 rounded-full bg-cyan-200 hover:-translate-y-1 hover:scale-110"
          >
            <svg
              className="stroke-0 fill-gray-600"
              viewBox="0 0 448 512"
              height="1.6rem"
              width="1.6rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </a>
        </div>
        <div className="flex items-center">
          <button className="p-2 text-gray-600 transition duration-150 ease-in-out border-2 border-gray-600 rounded-lg bg-cyan-200 hover:-translate-y-1 hover:scale-110">
            jokipuum@gmail.com
          </button>
        </div>
        <ThemeSwitcher />
        <div className="flex items-center p-2 border-2 border-gray-600 rounded-lg cursor-pointer bg-cyan-200 sm:hidden">
          <svg
            // onClick -> open menu
            className="stroke-0 fill-gray-600"
            viewBox="0 0 24 24"
            height="1.6rem"
            width="1.6rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
          </svg>
        </div>
      </nav>
    </header>
  );
}

export default Header;
