import { useState } from "react";
import HobbyMainContent from "./HobbyMainContent";
import { BaseHeader, BaseTitleHeader } from "../base/Base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFunnelDollar } from "@fortawesome/free-solid-svg-icons";

export default function Hobbies() {
    const [active, setActive] = useState('cricket');
    const props = {
        active: active,
        setActive: setActive
    };
    return (
        <div className="px-[5%] bg-black space-y-10 py-10">
            <BaseTitleHeader text="Extra-curriculars" />
            <BaseHeader text="Hobbies & Extra-curriculars" type='hobbies' icon={<FontAwesomeIcon icon={faFunnelDollar} className="text-2xl" />} />
            <div className="w-full h-[40rem] border border-gray-600 overflow-y-scroll">
                <HobbyNavBar {...props} />
                <HobbyMainContent {...props} />
            </div>
        </div>
    );
}

const HobbyNavBar = ({...props}) => {
    return (
        <div className="sticky top-0 w-full bg-gray-800 p-2 flex flex-row justify-center items-center divide-x-2 divide-gray-600 z-10">
            <HobbyNavButtons {...props} />
        </div>
    );
}

const HobbyNavButtons = ({active, setActive}) => {
    const buttonstyle = `w-[25%] p-1 text-center leading-7 tracking-wide font-light cursor-pointer ${active === 'cricket' && 'bg-gray-800'}`;
    return (
        <>
            <span onClick={() => setActive('cricket')} style={{backgroundColor: active === 'cricket' && 'rgb(55, 65, 81)'}} className={buttonstyle}>Cricket</span>
            <span onClick={() => setActive('badmenton')} style={{backgroundColor: active === 'badmenton' && 'rgb(55, 65, 81)'}} className={buttonstyle}>Badmenton</span>
            <span onClick={() => setActive('books')} style={{backgroundColor: active === 'books' && 'rgb(55, 65, 81)'}} className={buttonstyle}>Books</span>
            <span onClick={() => setActive('travel')} style={{backgroundColor: active === 'travel' && 'rgb(55, 65, 81)'}} className={buttonstyle}>Travel</span>
        </>
    );
}