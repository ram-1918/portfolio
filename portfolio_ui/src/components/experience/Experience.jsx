import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { BaseHeader, BaseTitleHeader } from "../base/Base";
import BaseExperience from "./BaseExperience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Experience() {
    return (
        <div className="px-[5%] py-10 h-fit w-full flex flex-col justify-start items-center space-y-5 bg-black">
            <BaseTitleHeader text="Experience" />
            <BaseHeader text="Work experience & Education" type='work' icon={<FontAwesomeIcon icon={faBriefcase} className="text-2xl" />} />
            <BaseExperience type="work" />
            <BaseExperience type="education" />
        </div>
    )
}