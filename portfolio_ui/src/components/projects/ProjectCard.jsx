import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BaseHeader } from "../base/Base";
import ProjectDetailCard from "./ProjectDetailsCard";
import { faComputer } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard() {
    return (
        <div className="px-[5%] h-fit py-10 w-full flex flex-col justify-center items-center space-y-4">
            <BaseHeader text="Academic & Personal Projects" type='projects' icon={<FontAwesomeIcon icon={faComputer} className="text-2xl" />} />
            <div className="w-full h-full flex flex-row justify-center items-start space-x-4">
                <ProjectDetailCard />
                <ProjectDetailCard />
                <ProjectDetailCard />
            </div>
        </div>
    )
}