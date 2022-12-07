import { useRef } from "react";
import { toast } from "react-toastify";

function Header() {
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
    <header className="flex items-center justify-center px-4 pt-6">
      <nav className="flex items-center justify-center w-full gap-x-4 md:justify-between md:w-3/5 xl:w-1/2 2xl:w-1/4">
        <div className="flex items-center justify-center gap-x-2">
          <a
            href="/"
            className="group p-2 transition duration-150 ease-in-out rounded-lg bg-[#1f212e] hover:-translate-y-1 hover:scale-110"
          >
            <svg
              className="stroke-2 stroke-[#b4bcd0] fill-none group-hover:stroke-gray-400"
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
            className="group p-2 transition duration-150 ease-in-out rounded-lg bg-[#1f212e] hover:-translate-y-1 hover:scale-110"
          >
            <svg
              className="stroke-0 fill-[#b4bcd0] group-hover:fill-gray-400"
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
            className="p-2 text-[#b4bcd0] font-medium transition duration-150 ease-in-out rounded-lg bg-[#1f212e] hover:-translate-y-1 hover:scale-110 hover:text-gray-400 hover:border-gray-400"
          >
            <span className="mr-1">&#128203;</span>
            jokipuum@gmail.com
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
