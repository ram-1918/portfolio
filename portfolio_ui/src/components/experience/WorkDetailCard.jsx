const description = ` Project: Insurance Quote Generation System
* Led the design and development of the system, integrating Django REST Framework 4.0 for backend
functionality and React.js for a dynamic frontend.
* Designed and implemented a PostgreSQL database schema for efficient storage and retrieval of insurance
data.
* Created RESTful APIs enabling interaction with the database from the frontend.
* Developed a user-friendly React.js frontend utilizing Redux for robust state management during quote
selection and calculations.
* Utilized Agile methodology, collaborating with stakeholders to gather requirements and ensure system
alignment with business needs.
`;

export default function WorkDetailCard() {

    return (
            <div className={`
                border-l border-gray-500 relative p-2
                before:absolute before:-top-3.5 before:-left-3 before:w-4 before:h-4 before:border
                before:border-teal-400 before:rounded-full
                after:absolute after:-top-3.5 after:-left-1 after:w-4 after:h-4 after:border after:rounded-full
                after:border-red-400
                `}>
            <div className={`
            px-4
            `}>
                <div className="flex flex-row justify-between items-center">
                    <span className="text-xl font-medium">Experience 1</span>
                    <span className="text-md font-light">September 2021 - Present</span>
                </div>
                <div className="pb-2 flex flex-row justify-between items-center">
                    <span className="text-md font-normal">Company Name</span>
                    <span className="text-md font-light">2 years 9 months</span>
                </div>
                <pre className="w-full border-t py-2 whitespace-pre-line font-sans text-sm">
                    {description}
                </pre>
            </div>
        </div>
    )
}