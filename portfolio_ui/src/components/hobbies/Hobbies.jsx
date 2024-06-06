import { useState } from "react";
import { BaseHeader } from "../base/Base";

export default function Hobbies() {
    return (
        <div className="h-[80%] px-[5%]">
            <div className="w-full h-full bg-red-100">
                <HobbyNavBar />
            </div>
        </div>
    )
}

const HobbyNavBar = () => {
    return (
        <div className="w-full bg-gray-100 p-2 flex flex-row justify-center items-center divide-x-2 divide-slate-400">
            <HobbyNavButtons />
        </div>
    )
}

const HobbyNavButtons = () => {
    const [active, setActive] = useState('');
    const buttonstyle = `w-[25%] p-1 text-center leading-7 tracking-wide font-light ${active === 'cricket' && 'bg-gray-200'}`;
    return (
        <>
            <span onClick={() => setActive('cricket')} style={{backgroundColor: active === 'cricket' && 'lightgray'}} className={buttonstyle}>Cricket</span>
            <span onClick={() => setActive('badmenton')} style={{backgroundColor: active === 'badmenton' && 'lightgray'}} className={buttonstyle}>Badmenton</span>
            <span onClick={() => setActive('books')} style={{backgroundColor: active === 'books' && 'lightgray'}} className={buttonstyle}>Books</span>
            <span onClick={() => setActive('travel')} style={{backgroundColor: active === 'travel' && 'lightgray'}} className={buttonstyle}>Travel</span>
        </>
    )
}