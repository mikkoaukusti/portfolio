import Header from "./components/navigation/Header";
import Attention from "./components/Attention";
import Intro from "./components/Intro";
import Education from "./components/education/Education";
import WorkExperience from "./components/work/WorkExperience";

function App() {
  return (
    <div className="font-rubik">
      <Attention />
      <Header />
      <Intro />
      <Education />
      <WorkExperience />
    </div>
  );
}

export default App;
