import BadmentonVids from "./BadmentonVids";
import BooksList from "./BooksList";
import CricketVids from "./CricketVids";
import TravelDocs from "./TravelDocs";

export default function HobbyMainContent({active}) {
    return (
        <div className="p-2 w-full h-full flex flex-col justify-start items-center">
            {active === 'cricket' && <CricketVids /> }
            {active === 'badmenton' && <BadmentonVids /> }
            {active === 'books' && <BooksList /> }
            {active === 'travel' && <TravelDocs /> }
        </div>
    )
}