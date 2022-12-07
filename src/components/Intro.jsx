function Intro() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-14">
      <div className="mb-10">
        <button className="py-1 px-3 rounded-3xl bg-[#1f212e] border border-[#34363f] text-gray-300 text-sm tracking-tight animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem] hover:bg-[#34363f] hover:border-[#1f212e]">
          <a
            href="https://www.atrsoft.com/blogi/teknologiat/integraatio-osaamista-turun-it-opiskelijoille"
            target="_blank"
            rel="noreferrer noopener"
          >
            ATR Soft released a blog post about our cooperation &rarr;
          </a>
        </button>
      </div>
      <div className="w-full md:w-3/5 xl:w-1/2 2xl:w-1/4">
        <div className="text-center">
          <h1 className="mb-1 text-5xl font-semibold tracking-tighter text-gradient animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem] sm:text-7xl md:text-8xl md:mb-3">
            Mikko
          </h1>
          <p className="mb-3 text-xl font-semibold tracking-tight text-[#b4bcd0] animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem] sm:text-2xl md:text-3xl md:mb-10">
            ICT Engineering student
          </p>
        </div>
        <p className="mb-6 tracking-tighter text-[#b4bcd0] animate-fade-in [--animation-delay:800ms] opacity-0 translate-y-[-1rem] md:text-lg">
          I am a 22-year-old man studying health technology at Turku University
          of Applied Sciences. In my spare time I study modern web development,
          focusing more on the front-end. Along with studying, I like going to
          the gym and walking in nature with my dog.
        </p>
        <p className="mb-3 tracking-tighter text-[#b4bcd0] animate-fade-in [--animation-delay:1000ms] opacity-0 translate-y-[-1rem] md:text-lg">
          Get to know me better:
        </p>
        <div className="flex flex-col w-full gap-y-3 animate-fade-in [--animation-delay:1200ms] opacity-0 translate-y-[-1rem] sm:grid sm:grid-cols-3 sm:gap-x-1 md:gap-x-2 xl:gap-x-3">
          <a
            href="/#education"
            className="shadow-md shadow-[#daeeb7]/50 flex items-center justify-center transition duration-150 ease-in p-2 text-gray-800 text-sm tracking-tighter rounded-full bg-[#daeeb7] hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-[#daeeb7]/50"
          >
            Education
            <span className="bg-[#bce299] px-3 py-1 rounded-full ml-1">
              &gt;
            </span>
          </a>
          <a
            href="/#work"
            className="shadow-md shadow-[#f19ba1]/50 flex items-center justify-center transition duration-150 ease-in p-2 text-gray-800 text-sm tracking-tighter rounded-full bg-[#f19ba1] hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-[#f19ba1]/50"
          >
            Work experience
            <span className="bg-[#e08389] px-3 py-1 rounded-full ml-1">
              &gt;
            </span>
          </a>
          <a
            href="/#projects"
            className="shadow-md shadow-[#a0c6ff]/50 flex items-center justify-center transition duration-150 ease-in p-2 text-gray-800 text-sm tracking-tighter rounded-full bg-[#a0c6ff] hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-[#a0c6ff]/50"
          >
            Projects
            <span className="bg-[#87b3f4] px-3 py-1 rounded-full ml-1">
              &gt;
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
