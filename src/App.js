import Header from "./components/navigation/Header";
import Attention from "./components/Attention";
import Intro from "./components/Intro";
import Education from "./components/education/Education";
import WorkExperience from "./components/work/WorkExperience";
import Projects from "./components/projects/Projects";
import Footer from "./components/navigation/Footer";

function App() {
  return (
    <div className="font-rubik">
      <Attention />
      <div className="bg-[#e7e0c9]">
        <Header />
        <Intro />
        <Education />
        <WorkExperience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
