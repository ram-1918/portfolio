import { colors } from "../../data";
import { BaseButton } from "../base/Base";

export default function NavButtons () {
    return (
      <div className="absolute z-20 flex items-center justify-center w-full top-2 ">
        <div style={{color:colors.nav_buttons, backgroundColor:colors.nav_buttons_bg}} className="flex flex-row items-center justify-center px-10 rounded-full w-fit space-x-7">
            <BaseButton text="About" style={{backgroundColor: 'trasparent'}} />
            <BaseButton text="Projects" style={{backgroundColor: 'trasparent'}} />
            <BaseButton text="Experience" style={{backgroundColor: 'trasparent'}} />
            <BaseButton text="Services" style={{backgroundColor: 'trasparent'}} />
            <BaseButton text="Contact" style={{backgroundColor: 'trasparent'}} />
        </div>
      </div>
    );
  }