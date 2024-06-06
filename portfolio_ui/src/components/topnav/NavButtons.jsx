import { BaseButton } from "../base/Base";

export default function NavButtons () {
    return (
      <div className="flex flex-row items-center justify-center space-x-7">
        <BaseButton text="About" style={{backgroundColor: 'trasparent'}} />
        <BaseButton text="Projects" style={{backgroundColor: 'trasparent'}} />
        <BaseButton text="Experience" style={{backgroundColor: 'trasparent'}} />
        <BaseButton text="Services" style={{backgroundColor: 'trasparent'}} />
        <BaseButton text="Contact" style={{backgroundColor: 'trasparent'}} />
      </div>
    );
  }