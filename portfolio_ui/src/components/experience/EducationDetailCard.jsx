export default function EducationDetailCard() {

    return (
            <div className={`
                border-l border-gray-500 relative p-2
                before:absolute before:-top-3.5 before:-left-3 before:w-4 before:h-4 before:border
                before:border-teal-400 before:rounded-full
                after:absolute after:-top-3.5 after:-left-1 after:w-4 after:h-4 after:border after:rounded-full
                after:border-red-400
                `}>
            <div className={`
            px-4 flex flex-col justify-start items-start
            `}>
                <span className="text-md font-light">September 2021 - Present</span>
                <span className="text-xl font-normal">University Name</span>
                <span className="text-md font-normal">Degree title</span>
            </div>
        </div>
    )
}