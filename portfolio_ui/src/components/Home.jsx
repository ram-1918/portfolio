import About from "./about/About";
import Contact from "./contact/Contact";
import Topnav from "./topnav/Topnav";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";
import Hobbies from "./hobbies/Hobbies";


export default function Home () {
    return (
      <div className="h-screen select-none">
        <Topnav />
        <About />
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
      </div>
    );
  }