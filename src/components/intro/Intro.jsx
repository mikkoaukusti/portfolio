import Attention from "./Attention";

function Intro() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-14">
      <div className="mb-10">
        <Attention />
      </div>
      <div className="w-full md:w-3/5 xl:w-1/2 2xl:w-1/4">
        <div className="flex flex-col items-start">
          <div className="flex flex-col">
            <h1 className="mb-1 text-4xl font-medium tracking-tighter text-gradient animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem] sm:text-5xl md:text-6xl md:mb-3">
              Mikko Jokipuu
            </h1>
            <p className="mb-3 tracking-tight text-[#b4bcd0] animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem] md:text-lg md:mb-10">
              ICT engineering student, specialized in{" "}
              <span className="font-medium">health tech</span>
            </p>
          </div>
        </div>
        <p className="mb-6 tracking-tighter text-gray-500 animate-fade-in [--animation-delay:800ms] opacity-0 translate-y-[-1rem] md:text-lg md:mb-10">
          22-year-old student at Turku University of Applied Sciences. Studying
          health technology at school, and modern web development (React,
          Next.js) in my spare time. In addition to school and leisure studies,
          I have time for going to the gym and jogging with my dog. Get to know
          me better by scrolling down or alternatively by pressing one of the
          three buttons.
        </p>
        <div className="flex flex-col w-full gap-y-3 animate-fade-in [--animation-delay:1200ms] opacity-0 translate-y-[-1rem] md:grid md:grid-cols-3 md:gap-x-4 xl:gap-x-5">
          <a
            href="/#education"
            className="shadow-md shadow-[#daeeb7]/50 inline-flex items-center justify-center transition duration-150 ease-in p-2 text-gray-800 text-sm tracking-tighter rounded-full bg-[#daeeb7] hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-[#daeeb7]/50"
          >
            Education
            <span className="inline-flex items-center bg-[#bce299] px-3 py-1 rounded-full ml-1.5">
              &gt;
            </span>
          </a>
          <a
            href="/#work"
            className="shadow-md shadow-[#f19ba1]/50 inline-flex items-center justify-center transition duration-150 ease-in p-2 text-gray-800 text-sm tracking-tighter rounded-full bg-[#f19ba1] hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-[#f19ba1]/50"
          >
            Work exp
            <span className="inline-flex items-center bg-[#e08389] px-3 py-1 rounded-full ml-1.5">
              &gt;
            </span>
          </a>
          <a
            href="/#projects"
            className="shadow-md shadow-[#a0c6ff]/50 inline-flex items-center justify-center transition duration-150 ease-in p-2 text-gray-800 text-sm tracking-tighter rounded-full bg-[#a0c6ff] hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-[#a0c6ff]/50"
          >
            Projects
            <span className="inline-flex items-center bg-[#87b3f4] px-3 py-1 rounded-full ml-1.5">
              &gt;
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
