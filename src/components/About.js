function About() {
  return (
    <section className="px-4 pt-20 bg-cyan-300">
      <div
        className="flex flex-col items-center justify-center"
        data-aos="fade-rigth"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <span className="text-xl text-gray-600 underline">About</span>
      </div>
      <div
        className="flex flex-col items-center justify-center"
        data-aos="fade-rigth"
        data-aos-easing="ease-in-sine"
        data-aos-duration="3000"
      >
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
            create-react-app. <br />
          </span>
        </p>
        <p className="pt-6 text-lg tracking-wider text-center text-gray-600">
          In addition to{" "}
          <span className="p-1 rounded-lg bg-cyan-200">React,</span> I am
          familiar with the following technology:{" "}
          <span className="p-1 rounded-lg bg-cyan-200">
            Next, ObjectScript && HL7.
          </span>
        </p>
      </div>
      <div
        data-aos="fade-rigth"
        data-aos-easing="ease-in-sine"
        data-aos-duration="3000"
      >
        <p className="pt-6 text-lg tracking-wider text-center text-gray-600">
          My working history in{" "}
          <span className="p-1 rounded-lg bg-cyan-200">ICT</span> companies:
        </p>
        <div>
          <p className="pt-6 text-sm tracking-wider text-center text-gray-600">
            Kaita Finland Oy
            <br /> 11/2021 - 7/2022
          </p>
          <p className="text-xs tracking-wider text-center text-gray-600">
            Monitoring IBM AS/400 devices on ticketing system && solving
            problems + errors on AS/400 CL
          </p>
        </div>
        <div>
          <p className="pt-6 text-sm tracking-wider text-center text-gray-600">
            Kaita Finland Oy
            <br /> 5/2021 - 6/2021
          </p>
          <p className="text-xs tracking-wider text-center text-gray-600">
            An internship that included WordPress + WooCommerce
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
