import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCopyright, faEnvelope, faHomeAlt, faImage, faLocation, faLocationPin, faMessage, faPhone, faRocket } from "@fortawesome/free-solid-svg-icons";

import { BaseContactSpan, BaseCopyRights } from "../base/Base";
import ContactForm from "./ContactForm";
import profile_picture from '../../images/MeLinkedin.png';
import { GithubIcon, GithubSmallIcon, InstagramIcon, LinkedinIcon } from "../base/BaseIcons";

export default function Contact() {
    return (
        <div className="bg-black text-white w-full pt-10 mt-10 flex flex-col justify-between items-center space-y-10">
            <ContactHeader />
            <div className="w-full flex flex-row justify-center items-center space-x-4">
                <div className="w-[40%]">
                    <ContactForm />
                </div>
                <div className="w-[30%] h-full flex flex-row justify-center items-center space-x-4">
                    <div className={`w-24 h-24 rounded-full bg-profilepicture flex justify-center items-center bg-cover bg-center bg-no-repeat`}></div>
                    <div className="flex flex-col justify-start items-start space-y-1">
                        <BaseContactSpan text="Edison, NJ" icon={faLocationPin} />
                        <BaseContactSpan text="sravantumu7@gmail.com" icon={faEnvelope} />
                        <BaseContactSpan text="+1 (217) 790-9353" icon={faPhone} />
                        <div className="flex flex-row justify-start items-center">
                            <LinkedinIcon name="" />
                            <GithubSmallIcon name="" />
                            <InstagramIcon name="" />
                        </div>
                    </div>
                </div>
            </div>
            <BaseCopyRights />
        </div>
    );
}

export const GetInTouchHeader = () => {
    return (
        <span className="text-3xl font-semibold">GET IN TOUCH</span>
    )
}

const ContactHeader = () => {
    return (
        <span className="text-white text-4xl font-medium">Get in touch <FontAwesomeIcon icon={faRocket} /></span>
    )
}