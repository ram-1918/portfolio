import { BaseButton, BaseInputField, BaseLabel, BaseTextArea } from "../base/Base";

export default function ContactForm() {
    return (
        <div className="w-96 bg-gray-800 p-4 flex flex-col justify-around items-center rounded-lg text-gray-300">
            <span className="text-2xl font-normal p-2 capitalize">Contact me</span>
            <div className="w-full h-full flex flex-col items-center justify-start space-y-2 p-2">
                <div className="w-full flex flex-col items-start justify-center">
                    <BaseLabel label="Your Name" />
                    <BaseInputField placeholder="" />
                </div>
                <div className="w-full flex flex-col items-start justify-center">
                    <BaseLabel label="Your Email" />
                    <BaseInputField placeholder="" />
                </div>
                <div className="w-full flex flex-col items-start justify-center">
                    <BaseLabel label="Your Comment" />
                    <BaseTextArea placeholder="" />
                </div>
            </div>
            <BaseButton text='Send' className="px-4 py-2 bg-gray-300 text-black rounded-full" />
        </div>
    );
}