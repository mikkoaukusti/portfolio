function About() {
  return (
    <section className="px-4 pt-20 bg-cyan-300">
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl text-gray-600 underline">About</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="pt-6 text-lg tracking-wider text-center text-gray-600">
          I am 22 years old && studying{" "}
          <span className="p-1 rounded-lg bg-cyan-200">health technology</span>{" "}
          at school. <br />
        </p>
        <p className="pt-6 text-lg tracking-wider text-center text-gray-600">
          In my spare time, I spend my time working on{" "}
          <span className="p-1 rounded-lg bg-cyan-200">web development,</span>{" "}
          going to the gym && walking in nature with my dog.
        </p>
        <p className="pt-6 text-lg tracking-wider text-center text-gray-600">
          I built this portfolio using <br />
          <span className="p-1 text-sm rounded-lg bg-cyan-200">
            create-react-app, <br />
          </span>
          check what else I can do.
        </p>
      </div>
    </section>
  );
}

export default About;
