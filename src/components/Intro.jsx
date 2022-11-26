function Intro() {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-20 pb-14">
      <div className="w-full md:w-3/5">
        <div className="text-center">
          <h1 className="mb-1 text-5xl font-medium tracking-tighter text-gray-600 md:text-7xl md:mb-3">
            Mikko
          </h1>
          <p className="mb-3 font-medium tracking-tighter text-gray-600 md:text-2xl">
            an ICT engineering student
          </p>
        </div>
        <p className="mb-6 tracking-tighter text-gray-500 md:text-lg">
          I am a 22-year-old man studying{" "}
          <span className="bg-[#fffaea] p-0.5 rounded">health technology</span>{" "}
          at Turku University of Applied Sciences. In my spare time I study
          modern{" "}
          <span className="bg-[#fffaea] p-0.5 rounded">web development,</span>{" "}
          focusing more on the front-end. Along with studying, I like going to
          the gym and walking in nature with my dog.
        </p>
        <p className="mb-3 tracking-tighter text-center text-gray-500 md:text-lg">
          Get to know me better:
        </p>
      </div>
      <div className="flex flex-col w-full gap-y-3 md:grid md:grid-cols-3 md:gap-x-3 md:w-3/5">
        <button className="transition duration-150 ease-in p-2 text-gray-600 text-sm tracking-tighter border-2 border-gray-600 rounded-lg bg-[#a8cdae] hover:-translate-y-1 hover:scale-105">
          Education
        </button>
        <button className="transition duration-150 ease-in p-2 text-gray-600 text-sm tracking-tighter border-2 border-gray-600 rounded-lg bg-[#e18568] hover:-translate-y-1 hover:scale-105">
          Work experience
        </button>
        <button className="transition duration-150 ease-in p-2 text-gray-600 text-sm tracking-tighter border-2 border-gray-600 rounded-lg bg-[#569fbf] hover:-translate-y-1 hover:scale-105">
          Projects
        </button>
      </div>
    </div>
  );
}

export default Intro;
