import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Workexperience from "./Workexperience";
import Education from "./Education";

export default function BaseExperience({type}) {
    return (
        <div className="w-full h-full flex flex-row justify-center items-start p-5">
            <div className="w-[30%] h-full flex flex-col justify-start items-center px-10">
                {
                    type === 'work' ?
                    <span className="text-lg"><FontAwesomeIcon icon={faBriefcase} /> Work History</span> :
                    <span className="text-lg"><FontAwesomeIcon icon={faGraduationCap} /> Education</span>
                }
            </div>
            {
                type === 'work' ?
                <Workexperience /> :
                <Education />
            }
        </div>
    )
}