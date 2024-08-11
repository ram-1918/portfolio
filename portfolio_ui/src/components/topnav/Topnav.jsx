import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BaseButton } from "../base/Base";
import NavButtons from "./NavButtons";
import { faDownload, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Topnav() {
    return (
      <header className="absolute top-0 left-0 right-0 flex flex-row items-center justify-between px-[5%] py-2 space-x-2">
        <BaseButton text="@2024.V3" className="text-xl font-semibold leading-8 tracking-widest uppercase" />
        {/* <NavButtons /> */}
        <ThemeButton />
      </header>
    );
  }

  const ThemeButton = () => <span>Resume <FontAwesomeIcon icon={faDownload} /></span>;