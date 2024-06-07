import book1 from '../../images/book1.png'
import book2 from '../../images/book2.png'

export default function TravelDocs() {
    return (
        <div className="w-full p-2 grid grid-cols-8 grid-flow-row gap-1 space-y-2">
            <BookCard image={book1} />
            <BookCard image={book2} />
            <BookCard image={book1} />
            <BookCard image={book2} />
            <BookCard image={book1} />
            <BookCard image={book1} />
            <BookCard image={book1} />
            <BookCard image={book1} />
            <BookCard image={book1} />
            <BookCard image={book1} />
            <BookCard image={book1} />
            <BookCard image={book1} />
            <BookCard image={book1} />

        </div>
    );
}

const BookCard = ({image}) => {
    return (
        <div className='w-32 flex flex-col justify-start items-start rounded shadow'>
            <div className="w-32 h-48 flex flex-col justify-center items-center">
                <img className='w-full h-full rounded-tl rounded-tr' src={image} />
            </div>
            <span className='px-1 text-ellipsis text-nowrap w-32 overflow-hidden text-sm font-medium bg-gray-200'>Read People like a book</span>
            <span className='px-1 text-ellipsis text-nowrap w-32 overflow-hidden text-sm font-medium bg-gray-200'>Pattrick King</span>
        </div>
    )
}