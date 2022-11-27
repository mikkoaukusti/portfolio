import Footer from "./navigation/Footer";

function NotFound() {
  return (
    <div className="font-rubik bg-[#e7e0c9] h-screen flex flex-col items-center justify-center px-4 pt-20 pb-14">
      <div className="w-full md:w-3/5">
        <div className="text-center">
          <p className="mb-1 text-5xl font-medium tracking-tighter text-gray-600 md:text-7xl md:mb-3">
            404
          </p>
          <p className="mb-5 tracking-tighter text-gray-500 md:text-lg">
            The page you were looking for was not found.
          </p>
          <a
            href="/"
            className="tracking-tighter text-gray-500 md:text-lg hover:underline"
          >
            Back to portfolio &rarr;
          </a>
        </div>
        <div className="pt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
