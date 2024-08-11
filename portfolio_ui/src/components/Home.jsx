import About from "./about/About";
import Contact from "./contact/Contact";
import Topnav from "./topnav/Topnav";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";
import Hobbies from "./hobbies/Hobbies";
import NavButtons from "./topnav/NavButtons";
import Certifications from "./certifications/Certifications";


export default function Home () {
    return (
      <div className="h-screen overflow-y-scroll">
        <NavButtons />
        <Topnav />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    );
  }
  {/* <Hobbies /> */}