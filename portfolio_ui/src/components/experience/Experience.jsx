import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { BaseHeader } from "../base/Base";
import BaseExperience from "./BaseExperience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Experience() {
    return (
        <div className="px-[10%] py-4 h-fit w-full flex flex-col justify-start items-center space-y-1">
            <BaseHeader text="Work experience & Education" type='work' icon={<FontAwesomeIcon icon={faBriefcase} className="text-2xl" />} />
            <BaseExperience type="work" />
            <BaseExperience type="education" />
        </div>
    )
}