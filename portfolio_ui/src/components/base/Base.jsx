import { faArrowDown, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BaseHeader = ({text, type='', icon=''}) => {
    return (
        <div className={`sticky top-0 w-full p-4 flex flex-row justify-center items-center text-center bg-white z-10`}>
            <span className="w-[90%] p-2 text-3xl leading-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-sky-500">{icon} {text}</span>
            <div className="w-[10%]">
                {type === 'work' && <span className="font-light p-2 w-fit rounded-lg shadow-lg">Resume <FontAwesomeIcon icon={faArrowDown} className="font-light" /> </span>}
            </div>
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
