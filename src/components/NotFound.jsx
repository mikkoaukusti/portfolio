import Footer from "./navigation/Footer";

function NotFound() {
  return (
    <div className="font-rubik bg-[#0c0d16] h-screen px-4 flex justify-center items-center">
      <div className="w-full md:w-3/5 xl:w-1/2 2xl:w-1/4">
        <div className="text-center">
          <p className="mb-3 text-xl font-semibold tracking-tighter text-gradient sm:text-2xl md:text-3xl md:mb-10">
            404 - Page was not found
          </p>
          <p className="text-start mb-6 tracking-tighter text-[#b4bcd0] md:text-lg">
            How did you end up here? Anyway, this page is unavailable for legal
            reasons. Double check that URL from misspellings and if it does
            contain some parameters, remove them.
          </p>
          <div className="flex flex-col items-center justify-center">
            <p className="text-center mb-3 tracking-tighter text-[#b4bcd0] md:text-lg">
              Redirect to the content, by clicking the button:
            </p>
            <div className="grid w-full grid-cols-1 md:w-1/2">
              <a
                href="/"
                className="shadow-md shadow-[#f1c17a]/50 flex items-center justify-center transition duration-150 ease-in p-2 text-gray-800 text-sm tracking-tighter rounded-full bg-[#f1c17a] hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-[#f1c17a]/50"
              >
                Portfolio
                <span className="bg-[#edb157] px-3 py-1 rounded-full ml-1.5">
                  &gt;
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-14">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
