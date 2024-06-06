export default function ProjectDetailCard() {
    const disc = "Utilized SASS and LESS CSS preprocessors for efficient code organization, maintainability, and scalability. Incorporated user-friendly animations and interactive elements using JavaScript and other animationlibraries like Motion UI. Built a dynamic and interactive UI leveraging React Native components, hooks , and styled-components ."
    return (
        <div className="p-2 h-[60%] border border-gray-300 flex flex-col justify-start items-start space-y-4 shadow-lg rounded-xl">
            <span className="w-full h-48 bg-project1 bg-cover bg-center bg-no-repeat p-2"></span>
            <div className="flex flex-col justify-start items-start">
                <span className="text-2xl font-medium leading-7 tracking-wide">Project Name</span>
                <span className="text-sm font-normal leading-7 tracking-wide">Technologies Used: Python, React.js</span>
                <span className="text-[0.8rem] font-light w-full overflow-hidden text-ellipsis">{disc}</span>
            </div>
        </div>
    )
}