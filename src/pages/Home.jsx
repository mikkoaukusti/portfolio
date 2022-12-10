import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Header from "../components/navigation/Header";
import Intro from "../components/intro/Intro";
import Education from "../components/education/Education";
import WorkExperience from "../components/work/WorkExperience";
import Projects from "../components/projects/Projects";
import Footer from "../components/navigation/Footer";

function Home() {
  return (
    <div className="font-rubik bg-[#0c0d16] bg-intro-gradient">
      <Header />
      <Intro />
      <Education />
      <WorkExperience />
      <Projects />
      <Footer />
      <div>
        <ToastContainer
          autoClose={3000}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          theme="dark"
        />
      </div>
    </div>
  );
}

export default Home;
