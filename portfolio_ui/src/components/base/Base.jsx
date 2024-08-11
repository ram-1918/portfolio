import { faArrowDown, faCopyright, faDownLong, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../data";

export const BaseHeader = ({text, type='', icon=''}) => {
    return (
        <div className={`w-full p-5 flex flex-row justify-end items-center text-center bg-black`}>
            <span className={`w-[50%] float-right p-2 text-[2rem] leading-6 tracking-wide ${colors.gradient_red_sky} `}>{icon} {text}</span>
            <div className="w-[25%] text-right">
                {type === 'work' && <span className="p-2 font-light rounded-lg shadow-lg w-fit">Resume <FontAwesomeIcon icon={faDownload} className="font-light" /> </span>}
            </div>
        </div>
    )
}

export const BaseTitleHeader = ({text}) => {
    return (
        <div className={`sticky top-0 left-0 w-full h-fit flex flex-row justify-start items-center text-center z-10 bg-black`}>
            <span className={`p-5 text-[2.5rem] font-light leading-6 tracking-wide ${colors.gradient_red_sky}`}>{text}</span>
        </div>
    )
}

export const BaseButton = ({text, ...rest}) => {
    return (
        <button 
        className='font-medium leading-10 tracking-wide text-md'    // Keeping this first replaces the styles from props
        {...rest}
        >
            {text}
        </button>
    );
};


export const BaseContactSpan = ({text, icon='', ...rest}) => {
    return (
        <span {...rest} className="space-x-4 font-light leading-7 tracking-wide text-md">
            {icon !== '' && <FontAwesomeIcon icon={icon} className="text-md" />}
            {icon !== '' && " "}
            <span>{text}</span>
        </span>
    );
};

export const BaseLabel = ({label}) => {
    return (
        <span className="font-light text-white text-md">
            {label}
        </span>
    );
};

export const BaseInputField = ({placeholder}) => {
    return (
        <input 
        className="w-full p-1 text-black rounded outline-none"
        type="text" 
        placeholder={placeholder} />
    );
};


export const BaseTextArea = () => {
    return (
        <textarea 
        className="w-full text-black rounded outline-none"
        rows="5" 
        cols="5"
        ></textarea> 
    )
}

export const BaseCopyRights = () => {
    return (
        <span className="font-sans text-sm leading-6 tracking-wider font-extralight">
            Copyrights <FontAwesomeIcon icon={faCopyright} className="text-gray-300" /> Sravan Kumar Tumu
        </span>
    );
};
