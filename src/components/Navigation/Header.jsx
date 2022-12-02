import { useRef, useState } from "react";
import { toast } from "react-toastify";

import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const toastId = useRef(null);

  async function copyEmail() {
    if (!toast.isActive(toastId.current)) {
      try {
        await navigator.clipboard.writeText("jokipuum@gmail.com");
        toastId.current = toast.success("Email copied to clipboard!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        console.log("Email copied to clipboard!");
        // Resolved - text copied to clipboard successfully
      } catch (err) {
        toastId.current = toast.error(
          "Failed to copy email, maybe try again?",
          {
            position: toast.POSITION.BOTTOM_RIGHT,
          }
        );
        console.error("Failed to copy the email: ", err);
        // Rejected - text failed to copy to the clipboard
      }
    }
  }

  return (
    <header className="flex items-center justify-center p-4 md:py-8">
      <nav className="flex items-center justify-center w-full gap-x-4 md:w-3/5 md:justify-between">
        <div className="items-center justify-center hidden gap-x-2 sm:flex">
          <a
            href="/"
            className="p-2 transition duration-150 ease-in-out border-2 border-gray-600 rounded-full bg-[#fffaea] hover:-translate-y-1 hover:scale-110"
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
            className="p-2 transition duration-150 ease-in-out border-2 border-gray-600 rounded-full bg-[#fffaea] hover:-translate-y-1 hover:scale-110"
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
          <button
            onClick={() => copyEmail()}
            className="p-2 text-gray-600 transition duration-150 ease-in-out border-2 border-gray-600 rounded-lg bg-[#fffaea] hover:-translate-y-1 hover:scale-110"
          >
            jokipuum@gmail.com
          </button>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
          className="flex items-center p-2 border-2 border-gray-600 rounded-lg cursor-pointer bg-[#fffaea] sm:hidden"
        >
          <svg
            className="stroke-0 fill-gray-600"
            viewBox="0 0 24 24"
            height="1.6rem"
            width="1.6rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
          </svg>
        </button>

        <div className="hidden sm:flex">
          <ThemeSwitcher />
        </div>
      </nav>
      {/* Mobile Menu */}
      <section
        className={
          openMobileMenu
            ? "sm:hidden fixed top-0 right-0 w-full h-screen bg-black/70 z-[100]"
            : ""
        }
      >
        <div
          className={
            openMobileMenu
              ? "fixed right-0 top-0 w-[70%] h-screen bg-[#e7e0c9] py-10 px-4 z-[100] duration-700"
              : "fixed right-[-100%] top-0 duration-700"
          }
        >
          <div className="flex items-center justify-end">
            {/* Mobile Menu Closing Button */}
            <button
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              className="flex items-center p-2 border-2 border-gray-600 rounded-lg cursor-pointer bg-[#fffaea]"
            >
              <svg
                className="stroke-0 fill-gray-600"
                viewBox="0 0 24 24"
                height="1.6rem"
                width="1.6rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
              </svg>
            </button>
          </div>
          <div className="pt-20">
            <p className="mb-3 font-medium tracking-tighter text-center text-gray-600">
              Copy my email by clicking it
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => copyEmail()}
                className="p-2 text-gray-600 transition duration-150 ease-in-out border-2 border-gray-600 rounded-lg bg-[#fffaea] hover:-translate-y-1 hover:scale-110"
              >
                jokipuum@gmail.com
              </button>
            </div>
          </div>
          <div className="pt-20">
            <p className="mb-3 font-medium tracking-tighter text-center text-gray-600">
              Follow me on socials
            </p>
            <div className="flex items-center justify-center gap-x-2">
              <a
                href="/"
                className="p-2 transition duration-150 ease-in-out border-2 border-gray-600 rounded-full bg-[#fffaea] hover:-translate-y-1 hover:scale-110"
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
                className="p-2 transition duration-150 ease-in-out border-2 border-gray-600 rounded-full bg-[#fffaea] hover:-translate-y-1 hover:scale-110"
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
          </div>
          <div className="pt-20">
            <p className="mb-3 font-medium tracking-tighter text-center text-gray-600">
              Theme settings
            </p>
            <div className="flex items-center justify-center">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
