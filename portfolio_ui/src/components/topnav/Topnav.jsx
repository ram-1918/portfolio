import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BaseButton } from "../base/Base";
import NavButtons from "./NavButtons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function Topnav() {
    return (
      <header className="absolute top-0 left-0 right-0 py-2 px-10 flex flex-row space-x-2 justify-between items-center">
        <BaseButton text="Sravan Kumar" className="uppercase text-xl font-semibold leading-8 tracking-widest font-mono" />
        <NavButtons />
        <ThemeButton />
      </header>
    );
  }

  const ThemeButton = () => <FontAwesomeIcon icon={faSun} />;