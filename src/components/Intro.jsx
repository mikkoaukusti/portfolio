function Intro() {
  return (
    <div className="bg-[#e7e0c9] flex items-center justify-center flex-col pt-20 pb-6 px-4">
      <h1 className="mb-1 text-5xl font-medium tracking-tighter text-gray-600 md:text-7xl md:mb-3">
        Mikko
      </h1>
      <p className="mb-3 font-medium tracking-tighter text-gray-600 md:text-2xl">
        an ICT engineering student
      </p>
      <p className="mb-6 tracking-tighter text-gray-500 md:text-lg">
        I am a 22-year-old man studying{" "}
        <span className="bg-[#fffaea] p-0.5 rounded">health technology</span> at
        Turku University of Applied Sciences. In my spare time I study modern{" "}
        <span className="bg-[#fffaea] p-0.5 rounded">web development,</span>{" "}
        focusing more on the front-end. Along with studying, I like going to the
        gym and walking in nature with my dog.
      </p>
      <p className="mb-3 tracking-tighter text-gray-500 md:text-lg">
        Get to know me better:
      </p>
      <div className="flex flex-col w-full gap-y-3 md:grid md:grid-cols-3 md:gap-x-3">
        <button className="p-2 text-gray-600 border-2 border-gray-600 rounded-lg bg-[#a8cdae]">
          Education
        </button>
        <button className="p-2 text-gray-600 border-2 border-gray-600 rounded-lg bg-[#e18568]">
          Work experience
        </button>
        <button className="p-2 text-gray-600 border-2 border-gray-600 rounded-lg bg-[#569fbf]">
          Projects
        </button>
      </div>
    </div>
  );
}

export default Intro;
