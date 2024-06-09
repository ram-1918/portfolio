export default function ProjectDetailCard({image='', name, content}) {
    const disc = "Utilized SASS and LESS CSS preprocessors for efficient code organization, maintainability, and scalability. Incorporated user-friendly animations and interactive elements using JavaScript and other animationlibraries like Motion UI. Built a dynamic and interactive UI leveraging React Native components, hooks , and styled-components ."
    return (
        <div className="w-full h-full flex flex-row even:flex-row-reverse justify-center items-center shadow-lg rounded-xl">
            <div className="w-[50%] h-80 flex items-center justify-center bg-red-400">
                <img src={image} alt='project image' className="w-full h-full" />
            </div>
            <div className="w-[50%] h-80 flex flex-col justify-center items-center bg-black text-gray-300 leading-6 tracking-wide">
                <div className="w-96 flex flex-col justify-center items-start">
                    <span className="text-xl font-semibold">{name}</span>
                    <span className="text-md font-medium">{content}</span>
                </div>
            </div>
        </div>
    )
}