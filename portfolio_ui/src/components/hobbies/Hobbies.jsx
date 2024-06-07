import { useState } from "react";
import HobbyMainContent from "./HobbyMainContent";

export default function Hobbies() {
    const [active, setActive] = useState('');
    const props = {
        active: active,
        setActive: setActive
    };
    return (
        <div className="px-[5%]">
            <div className="w-full h-[40rem] border overflow-y-scroll overscroll-y-contain">
                <HobbyNavBar {...props} />
                <HobbyMainContent {...props} />
            </div>
        </div>
    );
}

const HobbyNavBar = ({...props}) => {
    return (
        <div className="sticky top-0 w-full bg-gray-100 p-2 flex flex-row justify-center items-center divide-x-2 divide-slate-400">
            <HobbyNavButtons {...props} />
        </div>
    );
}

const HobbyNavButtons = ({active, setActive}) => {
    const buttonstyle = `w-[25%] p-1 text-center leading-7 tracking-wide font-light ${active === 'cricket' && 'bg-gray-200'}`;
    return (
        <>
            <span onClick={() => setActive('cricket')} style={{backgroundColor: active === 'cricket' && 'lightgray'}} className={buttonstyle}>Cricket</span>
            <span onClick={() => setActive('badmenton')} style={{backgroundColor: active === 'badmenton' && 'lightgray'}} className={buttonstyle}>Badmenton</span>
            <span onClick={() => setActive('books')} style={{backgroundColor: active === 'books' && 'lightgray'}} className={buttonstyle}>Books</span>
            <span onClick={() => setActive('travel')} style={{backgroundColor: active === 'travel' && 'lightgray'}} className={buttonstyle}>Travel</span>
        </>
    );
}