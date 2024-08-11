export default function CertificationCard({image='', name, content}) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4 shadow-lg rounded-xl">
            <img src={image} alt='certification image' className="w-40 h-40 p-5 bg-white rounded-full" />
            <div className="flex flex-col items-center justify-center leading-6 tracking-wide text-gray-300 bg-black">
                <span className="text-xl font-semibold">{name}</span>
                <span className="font-light text-center text-medium">{content}</span>
            </div>
        </div>
    )
}