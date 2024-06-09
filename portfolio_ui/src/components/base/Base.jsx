import { faArrowDown, faCopyright, faDownLong, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BaseHeader = ({text, type='', icon=''}) => {
    return (
        // <div className={`sticky top-0 w-full p-5 flex flex-row justify-end items-center text-center bg-black z-20`}>
        <div className={`w-full p-5 flex flex-row justify-end items-center text-center bg-black`}>
            <span className="w-[50%] float-right p-2 text-3xl leading-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-sky-500">{icon} {text}</span>
            <div className="w-[25%] text-right">
                {type === 'work' && <span className="font-light p-2 w-fit rounded-lg shadow-lg">Resume <FontAwesomeIcon icon={faDownload} className="font-light" /> </span>}
            </div>
        </div>
    )
}

export const BaseTitleHeader = ({text}) => {
    return (
        <div className={`sticky top-0 left-0 w-full p-5 flex flex-row justify-start items-center text-center bg-black z-20`}>
            <span className="text-2xl font-light leading-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-sky-500">{text}</span>
        </div>
    )
}

export const BaseButton = ({text, ...rest}) => {
    return (
        <button 
        className='text-md font-medium font-sans leading-10 tracking-wide'    // Keeping this first replaces the styles from props
        {...rest}
        >
            {text}
        </button>
    );
};


export const BaseContactSpan = ({text, icon='', ...rest}) => {
    return (
        <span {...rest} className="text-md font-light leading-7 tracking-wide space-x-4">
            {icon !== '' && <FontAwesomeIcon icon={icon} className="text-md" />}
            {icon !== '' && " "}
            <span>{text}</span>
        </span>
    );
};

export const BaseLabel = ({label}) => {
    return (
        <span className="text-white font-light text-md">
            {label}
        </span>
    );
};

export const BaseInputField = ({placeholder}) => {
    return (
        <input 
        className="w-full outline-none rounded text-black p-1"
        type="text" 
        placeholder={placeholder} />
    );
};


export const BaseTextArea = () => {
    return (
        <textarea 
        className="w-full outline-none text-black rounded"
        rows="5" 
        cols="5"
        ></textarea> 
    )
}

export const BaseCopyRights = () => {
    return (
        <span className="text-sm font-extralight font-sans leading-6 tracking-wider">
            Copyrights <FontAwesomeIcon icon={faCopyright} className="text-gray-300" /> Sravan Kumar Tumu
        </span>
    );
};
